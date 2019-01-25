import Graph from './graph/Graph.js'

class SimulationGraph extends Graph {
    constructor(elapsedDays = 0) {
        super()
        this.elapsedDays = elapsedDays

        /* Set up the Graph here */

        // Input vertices, usually changeable by the user in the UI
        this.createVertex("price", 100)
        this.createVertex("workingTimeModel", 0)
        this.createVertex("totalExpenses", 10)

        // Aggregate functions, reduced from an array (list of objects)
        this.createVertex("totalSalaries", 0)
        this.createVertex("averageEmployeeSatisfaction", 0.5)
        this.createVertex("totalEngineerSkills", 0)
        this.createVertex("totalSalespeopleSkills", 0)
        this.createVertex("totalProductUtilities", 0)

        // Relationships between variables, i.e. edges in the graph
        this.createCalculatedVertex("totalSales", 0, function(elapsedDays, totalProductUtilities, price, oldValue) {
            return totalProductUtilities/price * 100
        }, ["totalProductUtilities", "price"])

        this.createCalculatedVertex("revenue", 0, function(elapsedDays, totalSales, price, oldValue) {
            return totalSales * price
        }, ["totalSales", "price"])

        this.createCalculatedVertex("profit", 0, function(elapsedDays, revenue, totalExpenses, oldValue) {
            return revenue - totalExpenses
        }, ["revenue", "totalExpenses"])

        this.createCalculatedVertex("netWorth", 0, function(elapsedDays, profit, oldValue) {
            return oldValue + profit
        }, ["profit"])
    }

    forwardTime = () => {
        this.elapsedDays += 1
        this.recalculate()
    }
}

export default SimulationGraph
