import Vertex from './Vertex'

class Graph {
    constructor() {
        this.vertices = {}
        this.adjacencyList = {}
    }

    getVertex(key) {
        return this.vertices[key]
    }

    getVertexValue(key) {
        return this.vertices[key].value
    }

    createCalculatedVertex(key, value, weightFunction, fromKeys) {
        this.vertices[key] = new Vertex(key, value)
        this.adjacencyList[key] = { weightFunction: weightFunction, fromKeys: fromKeys, toKey: key}
    }

    createVertex(key, value = 0) {
        this.vertices[key] = new Vertex(key, value)
    }

    setVertex(key, value) {
        this.vertices[key].value = value
    }

    updateVertices(vertices) {
        const self = this
        Object.keys(vertices).forEach(function(key) {
            self.setVertex(key, vertices[key])
        })
    }

    recalculate() {
        const self = this
        Object.keys(this.adjacencyList).forEach(function(adjacencyObjectKey) {
            const adjacencyObject = self.adjacencyList[adjacencyObjectKey]
            const fromNodes = adjacencyObject.fromKeys.map(fromKey => self.getVertex(fromKey).value)
            const toNode = self.getVertex(adjacencyObject.toKey).value
            fromNodes.push(toNode)
            fromNodes.unshift(self.elapsedDays)
            self.setVertex(adjacencyObject.toKey, adjacencyObject.weightFunction.apply(this, fromNodes))
        })
    }
}

export default Graph
