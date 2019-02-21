import Graph from './graph/Graph.js'
import {gauss} from './maths/functionsHelper'

// This class extends the Graph class by a time dimension.

class SimulationGraph extends Graph {
    constructor(elapsedDays = 0) {
        super()
        this.elapsedDays = elapsedDays

        /* Set up the Graph here */

        // Input vertices, changeable by the user in the UI.
        this.createVertex("price", 100) // TODO: Missing UI
        this.createVertex("workingTimeModel", 0)
        this.createVertex("investmentAmount", 0) // TODO: Missing UI
        this.createVertex("investmentRisk", 4) // TOOD: Missing UI
        this.createVertex("investmentExpectedReturn", 0.08) // TODO: Missing UI

        // Aggregate functions, reduced from an array (list of objects),
        // which itself is changeable by the user by adding, removing
        // or modifying elements (e.g. hiring and firing employees).
        this.createVertex("totalSalaries", 0)
        this.createVertex("averageEmployeeSatisfaction", 0.5)
        this.createVertex("totalEngineerSkills", 0)
        this.createVertex("averageEngineerSatisfaction", 0.5)
        this.createVertex("totalSalespeopleSkills", 0)
        this.createVertex("averageSalespeopleSatisfaction", 0.5)
        this.createVertex("productUtilities", 0)
        this.createVertex("totalProductComponentCost", 0)
        this.createVertex("taxRate", 0.15)

        // All calculated vertices store dictionary keys to their input
        // vertices. Here we can define relationships between variables,
        // i.e. edges in the graph.
        this.createCalculatedVertex("salesFigures", 0, function(elapsedDays, productUtilities, price, totalSalespeopleSkills, oldValue) {
            return productUtilities.map(utility => totalSalespeopleSkills === 0 ? 0 : (utility/price) * (1 + totalSalespeopleSkills/20) * (1 + Math.random()/10 * 5))
        }, ["productUtilities", "price", "totalSalespeopleSkills"])

        this.createCalculatedVertex("totalSales", 0, function(elapsedDays, salesFigures, price, oldValue) {
            return salesFigures.reduce((totalSales, salesFigure) => salesFigure * price, 0)
        }, ["salesFigures", "price"])

        this.createCalculatedVertex("totalExpenses", 0, function(elapsedDays, totalProductComponentCost, totalSalaries, totalSales, oldValue) {
            return totalProductComponentCost * totalSales + totalSalaries
        }, ["totalProductComponentCost", "totalSalaries", "totalSales"])

        this.createCalculatedVertex("revenue", 0, function(elapsedDays, totalSales, price, oldValue) {
            return totalSales * price
        }, ["totalSales", "price"])

        this.createCalculatedVertex("profit", 0, function(elapsedDays, revenue, totalExpenses, taxRate, oldValue) {
            const profit = revenue - totalExpenses
            return profit > 0 ? profit - (profit * taxRate) : profit
        }, ["revenue", "totalExpenses", "taxRate"])

        this.createCalculatedVertex("investmentEarnings", 0, function(elapsedDays, investmentExpectedReturn, investmentAmount, investmentRisk) {
            const ret = investmentAmount * gauss(investmentExpectedReturn, investmentRisk)
            /*console.log(ret)
            console.log(gauss(investmentExpectedReturn, investmentRisk));
            console.log(investmentAmount)
            console.log(investmentExpectedReturn)
            console.log(investmentRisk)*/
            return ret
        }, ["investmentExpectedReturn", "investmentAmount", "investmentRisk"])

        // In the end, all nodes will have a transitive relationship to
        // this node. The goal of the game is to maximize your net worth.
        this.createCalculatedVertex("netWorth", 25000, function(elapsedDays, profit, investmentEarnings, oldValue) {
            return oldValue + profit + investmentEarnings
        }, ["profit", "investmentEarnings"])
    }

    forwardTime = () => {
        this.elapsedDays += 1
        this.recalculate()
    }
}

export default SimulationGraph
