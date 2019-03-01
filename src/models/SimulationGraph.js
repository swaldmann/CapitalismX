import Graph from './graph/Graph.js'
import {gauss} from './maths/functionsHelper'

// This class extends the Graph class by a time dimension.

class SimulationGraph extends Graph {
    constructor(elapsedDays = 0) {
        super()

        this.elapsedDays = elapsedDays

        /* Set up the Graph here */

        this.createVertex("taxRate")

        // Aggregate functions, reduced from an array,
        // which itself is changeable by the user by adding, removing
        // or modifying elements (e.g. hiring and firing employees).
        this.createVertex("totalSalaries")
        this.createVertex("totalProductComponentCost")
        this.createVertex("totalLogisticsCosts")
        this.createVertex("totalLobbyistCosts")
        this.createVertex("totalMarketingCosts")
        this.createVertex("totalMachineCosts")
        this.createVertex("investments")
        this.createVertex("propertyAssets")
        this.createVertex("totalSalesRevenue")

        // All calculated vertices store dictionary keys to their input
        // vertices. Here we can define relationships between variables,
        // i.e. edges in the graph.
        this.createCalculatedVertex("totalProductionCost", function(elapsedDays, totalProductComponentCost, totalMachineCosts) {
            return totalProductComponentCost + totalMachineCosts
        }, ["totalProductComponentCost", "totalMachineCosts"])

        this.createCalculatedVertex("totalExpenses", function(elapsedDays, totalProductionCost, totalSalaries, totalLogisticsCosts, totalLobbyistCosts, totalMarketingCosts, oldValue) {
            return totalProductionCost + totalSalaries + totalLogisticsCosts + totalLobbyistCosts + totalMarketingCosts
        }, ["totalProductionCost", "totalSalaries", "totalLogisticsCosts", "totalLobbyistCosts", "totalMarketingCosts"])

        this.createCalculatedVertex("ebit", function(elapsedDays, totalSalesRevenue, totalExpenses, oldValue) {
            return totalSalesRevenue - totalExpenses
        }, ["totalSalesRevenue", "totalExpenses"])

        this.createCalculatedVertex("taxes", function(elapsedDays, ebit, taxRate, oldValue) {
            return ebit > 0 ? ebit * taxRate : 0
        }, ["ebit", "taxRate"])

        this.createCalculatedVertex("investmentEarnings", function(elapsedDays, investments, oldValue) {
            return investments.map(investment => parseInt(investment.amount * gauss(investment.expectedDailyReturn, investment.standardDeviation)))
        }, ["investments"])

        this.createCalculatedVertex("totalInvestmentEarnings", function(elapsedDays, investmentEarnings, oldValue) {
            return parseInt(investmentEarnings.reduce((totalEarnings, earning) => totalEarnings + earning, 0))
        }, ["investmentEarnings"])

        this.createCalculatedVertex("totalInvestmentAmount", function(elapsedDays, investments, investmentEarnings, oldValue) {
            return investments.map((investment, i) => investment.amount + investmentEarnings[i]).reduce((totalAmount, investment) => totalAmount + investment, 0)
        }, ["investments", "investmentEarnings"])

        this.createCalculatedVertex("assets", function(elapsedDays, totalInvestmentAmount, propertyAssets, oldValue) {
            return totalInvestmentAmount + propertyAssets
        }, ["totalInvestmentAmount", "propertyAssets"])

        this.createCalculatedVertex("profit", function(elapsedDays, ebit, taxes, oldValue) {
            return ebit - taxes
        }, ["ebit", "taxes"])

        this.createCalculatedVertex("cash", function(elapsedDays, profit, oldValue) {
            return oldValue + profit
        }, ["profit"])

        // In the end, all nodes will lead into this node.
        // The goal of the game is to maximize your net worth.
        this.createCalculatedVertex("netWorth", function(elapsedDays, cash, assets, oldValue) {
            return cash + assets
        }, ["cash", "assets"])
    }

    forwardTime = () => {
        this.elapsedDays += 1
        this.recalculate()
    }
}

export default SimulationGraph
