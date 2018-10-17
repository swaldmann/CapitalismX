import Graph from './graph/Graph.js'
import * as Constants from './constants/Employees.js'

class SimulationGraph extends Graph {
    constructor() {
        super()

        /* This is the starting point of our game simulation. All vertices are initialized here. */

        /* Employee Simulation */
        this.engineers = this.createVertex([Constants.ENGINEERS])
        this.salespeople = this.createVertex([Constants.SALESPEOPLE])
        this.worktimeModel = this.createVertex(0)
        this.employeeSatisfaction = this.createVertex(0.5)
        this.productionRate = this.createVertex(1)
        this.netWorth = this.createVertex(0)

        /* Edges */
        this.addDirectedEdge(this.productionRate, this.netWorth, 5)
    }
}

export default SimulationGraph
