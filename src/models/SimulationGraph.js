import Graph from './graph/Graph.js'
import {gauss} from './maths/functionsHelper'

// This class extends the Graph class by a time dimension.

class SimulationGraph extends Graph {
    constructor(elapsedDays = 0) {
        super()
        const self = this
        this.elapsedDays = elapsedDays

        /* Set up the Graph here */

        // Input vertices, changeable by the user in the UI.
        this.createVertex("price", 100)
        this.createVertex("workingTimeModel", 0)
        this.createVertex("investmentRisk", 0.005)
        this.createVertex("investmentExpectedReturn", Math.pow(1.08, 1/365)-1)
        this.createVertex("taxRate", 0.15)
        this.createVertex("loans", 0)
        this.createVertex("loanInterests", 0)

        // Aggregate functions, reduced from an array (list of objects),
        // which itself is changeable by the user by adding, removing
        // or modifying elements (e.g. hiring and firing employees).
        this.createVertex("totalSalaries", 0)
        this.createVertex("averageEmployeeSatisfaction", 0.5)
        this.createVertex("totalEngineerSkills", 0)
        this.createVertex("averageEngineerSatisfaction", 0.5)
        this.createVertex("totalSalespeopleSkills", 0)
        this.createVertex("averageSalespeopleSatisfaction", 0.5)
        this.createVertex("productUtilities", [])
        this.createVertex("totalProductComponentCost", 0)
        this.createVertex("prices", [])

        // All calculated vertices store dictionary keys to their input
        // vertices. Here we can define relationships between variables,
        // i.e. edges in the graph.
        this.createCalculatedVertex("salesFigures", 0, function(elapsedDays, productUtilities, prices, totalSalespeopleSkills, oldValue) {
            return productUtilities.map((utility, i) =>
                        totalSalespeopleSkills === 0 ? 0 :
                        parseInt(utility/prices[i] * (1 + totalSalespeopleSkills/20) * (1 + Math.random()/10 * 5) * 100))
        }, ["productUtilities", "prices", "totalSalespeopleSkills"])

        this.createCalculatedVertex("totalSales", 0, function(elapsedDays, salesFigures, prices, oldValue) {
            return salesFigures.reduce((totalSales, salesFigure, i) => totalSales + salesFigure * prices[i]/100, 0)
        }, ["salesFigures", "prices"])

        this.createCalculatedVertex("totalExpenses", 0, function(elapsedDays, totalProductComponentCost, totalSalaries, totalSales, oldValue) {
            return totalProductComponentCost * totalSales + totalSalaries
        }, ["totalProductComponentCost", "totalSalaries", "totalSales"])

        this.createCalculatedVertex("revenue", 0, function(elapsedDays, totalSales, price, oldValue) {
            return totalSales * price
        }, ["totalSales", "price"])

        this.createCalculatedVertex("ebit", 0, function(elapsedDays, revenue, totalExpenses, oldValue) {
            return revenue - totalExpenses
        }, ["revenue", "totalExpenses"])

        this.createCalculatedVertex("taxes", 0, function(elapsedDays, ebit, taxRate, oldValue) {
            return ebit > 0 ? ebit * taxRate : 0
        }, ["ebit", "taxRate"])

        this.createCalculatedVertex("profit", 0, function(elapsedDays, ebit, taxes, oldValue) {
            return ebit - taxes
        }, ["ebit", "taxes"])

        this.createCalculatedVertex("investmentAmount", 1000, function(elapsedDays, investmentExpectedReturn, investmentRisk, oldValue) {
            const newValue = parseFloat(oldValue) * (1 + gauss(investmentExpectedReturn, investmentRisk))
            self.createCalculatedVertex("investmentEarnings", 0, function(elapsedDays, oldValueEarnings) {
                return parseInt(newValue) - parseInt(oldValue)
            }, [])
            return parseInt(newValue)
        }, ["investmentExpectedReturn", "investmentRisk"])

        this.createCalculatedVertex("cash", 25000, function(elapsedDays, profit, oldValue) {
            return oldValue + profit
        }, ["profit"])

        // In the end, all nodes will lead into this node.
        // The goal of the game is to maximize your net worth.
        this.createCalculatedVertex("netWorth", 25000, function(elapsedDays, cash, investmentAmount, oldValue) {
            return cash + investmentAmount
        }, ["cash", "investmentAmount"])
    }

    forwardTime = () => {
        this.elapsedDays += 1
        this.recalculate()
    }
}

export default SimulationGraph
