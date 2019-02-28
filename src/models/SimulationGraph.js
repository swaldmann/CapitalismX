import Graph from './graph/Graph.js'
import {gauss} from './maths/functionsHelper'

// This class extends the Graph class by a time dimension.

class SimulationGraph extends Graph {
    constructor(elapsedDays = 0) {
        super()

        this.elapsedDays = elapsedDays

        /* Set up the Graph here */

        // Input vertices, changeable by the user in the UI.
        this.createVertex("workingTimeModel", 0)
        //this.createVertex("investmentRisk", 0.005)
        //this.createVertex("investmentExpectedReturn", Math.pow(1.08, 1/365)-1)
        this.createVertex("taxRate", 0.15)
        this.createVertex("loans", 0)
        this.createVertex("loanInterests", 0)
        this.createVertex("manufacturingMultiplicator", 0)

        // Aggregate functions, reduced from an array (list of objects),
        // which itself is changeable by the user by adding, removing
        // or modifying elements (e.g. hiring and firing employees).
        this.createVertex("totalSalaries", 0)
        this.createVertex("totalEngineerQualityOfWork", 0)
        this.createVertex("totalSalespeopleQualityOfWork", 0)
        this.createVertex("totalLogisticsCosts", 0)
        this.createVertex("totalLobbyistCosts", 0)
        this.createVertex("totalMarketingCosts", 0)
        this.createVertex("totalMachineCosts", 0)
        this.createVertex("demandPeriodicAmounts", [])
        this.createVertex("productComponentCosts", 0)
        this.createVertex("prices", [])
        this.createVertex("investments", [])
        this.createVertex("propertyAssets", 0)

        // All calculated vertices store dictionary keys to their input
        // vertices. Here we can define relationships between variables,
        // i.e. edges in the graph.

        this.createCalculatedVertex("totalSalesRevenue", 0, function(elapsedDays, demandPeriodicAmounts, prices, oldValue) {
            return demandPeriodicAmounts.reduce((totalSalesRevenue, amount, i) => totalSalesRevenue + amount * prices[i], 0)
        }, ["demandPeriodicAmounts", "prices"])

        this.createCalculatedVertex("totalProductComponentCost", 0, function(elapsedDays, productComponentCosts, demandPeriodicAmounts, oldValue) {
            return demandPeriodicAmounts.map((salesFigure, i) => salesFigure * productComponentCosts[i]).reduce((totalCost, cost) => totalCost + cost, 0)
        }, ["productComponentCosts", "demandPeriodicAmounts"])

        this.createCalculatedVertex("totalProductionCost", 0, function(elapsedDays, totalProductComponentCost, totalMachineCosts) {
            return totalProductComponentCost + totalMachineCosts
        }, ["totalProductComponentCost", "totalMachineCosts"])

        this.createCalculatedVertex("totalExpenses", 0, function(elapsedDays, totalProductionCost, totalSalaries, totalLogisticsCosts, totalLobbyistCosts, totalMarketingCosts, oldValue) {
            return totalProductionCost + totalSalaries + totalLogisticsCosts + totalLobbyistCosts + totalMarketingCosts
        }, ["totalProductionCost", "totalSalaries", "totalLogisticsCosts", "totalLobbyistCosts", "totalMarketingCosts"])

        this.createCalculatedVertex("ebit", 0, function(elapsedDays, totalSalesRevenue, totalExpenses, oldValue) {
            return totalSalesRevenue - totalExpenses
        }, ["totalSalesRevenue", "totalExpenses"])

        this.createCalculatedVertex("taxes", 0, function(elapsedDays, ebit, taxRate, oldValue) {
            return ebit > 0 ? ebit * taxRate : 0
        }, ["ebit", "taxRate"])

        this.createCalculatedVertex("investmentEarnings", [], function(elapsedDays, investments, oldValue) {
            return investments.map(investment => parseInt(investment.amount * gauss(investment.expectedDailyReturn, investment.standardDeviation)))
        }, ["investments"])

        this.createCalculatedVertex("totalInvestmentEarnings", 0, function(elapsedDays, investmentEarnings, oldValue) {
            return parseInt(investmentEarnings.reduce((totalEarnings, earning) => totalEarnings + earning, 0))
        }, ["investmentEarnings"])

        this.createCalculatedVertex("totalInvestmentAmount", 0, function(elapsedDays, investments, investmentEarnings, oldValue) {
            return investments.map((investment, i) => investment.amount + investmentEarnings[i]).reduce((totalAmount, investment) => totalAmount + investment, 0)
        }, ["investments", "investmentEarnings"])

        this.createCalculatedVertex("assets", 0, function(elapsedDays, totalInvestmentAmount, propertyAssets, oldValue) {
            return totalInvestmentAmount + propertyAssets
        }, ["totalInvestmentAmount", "propertyAssets"])

        this.createCalculatedVertex("profit", 0, function(elapsedDays, ebit, totalInvestmentEarnings, taxes, oldValue) {
            return ebit - taxes + totalInvestmentEarnings
        }, ["ebit", "totalInvestmentEarnings", "taxes"])

        this.createCalculatedVertex("cash", 50000, function(elapsedDays, profit, totalInvestmentEarnings, oldValue) {
            return oldValue + profit - totalInvestmentEarnings
        }, ["profit", "totalInvestmentEarnings"])

        // In the end, all nodes will lead into this node.
        // The goal of the game is to maximize your net worth.
        this.createCalculatedVertex("netWorth", 50000, function(elapsedDays, cash, assets, oldValue) {
            return cash + assets
        }, ["cash", "assets"])
    }

    forwardTime = () => {
        this.elapsedDays += 1
        this.recalculate()
    }
}

export default SimulationGraph
