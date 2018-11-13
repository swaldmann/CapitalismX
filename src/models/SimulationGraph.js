import Graph from './graph/Graph.js'
import { PRODUCTS } from '../constants/ProductionConstants'
import { getProductUtilities } from '../selectors/products'
//import * as Constants from './constants/Employees.js'

class SimulationGraph extends Graph {
    constructor() {
        super()

        /* This is the starting point of our game simulation. All vertices are initialized here. */
        this.elapsedDays = this.createVertex(0)

        /* Employee Simulation */
        this.productionUtility = this.createVertex(1)
        this.productionRate = this.createVertex(5)
        this.cash = this.createVertex(0)

        /* Edges */
        this.addDirectedEdge(this.productionRate, this.cash, 12)
    }

    recalculate = () => {
        this.elapsedDays.value += 1

        this.adjacencyList.forEach(function(edgeList) {
            if (edgeList.edges === undefined) {
                return
            }
            edgeList.edges.forEach(function(edge) {
                edge.toNode.value += edge.fromNode.value/5 * edge.weight
            })
        })
    }
}

export default SimulationGraph
