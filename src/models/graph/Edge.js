class Edge {
    constructor(weightFunction, fromNode, toNode) {
        this.fromNode = fromNode
        this.toNode = toNode
        this.weightFunction = weightFunction
    }

    applyWeightFunction() {
        this.weightFunction(this.fromNode, this.toNode)
    }
}

export default Edge
