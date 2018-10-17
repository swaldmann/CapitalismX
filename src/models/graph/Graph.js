import Edge from './Edge'
import Vertex from './Vertex'
import EdgeList from './EdgeList'

class Graph {
    constructor() {
        this.adjacencyList = []
        this.vertices = []
    }

    getVertices() {
        const vertices = []
        this.adjacencyList.forEach(function(edgeList) {
            vertices.push(edgeList.vertex)
        })
        return vertices
    }

    getEdges() {
        const edges = []
        this.adjacencyList.forEach(function(edgeList) {
            edges.concat(edgeList.edges)
        })
        return edges
    }

    createVertex(value) {
        const matchingVertices = this.vertices.filter(vertex => vertex.value === value)
        if (matchingVertices.length > 0) {
            return matchingVertices[matchingVertices.length - 1]
        }
        let vertex = new Vertex(this.adjacencyList.length, value)
        let edgeList = new EdgeList(vertex)
        this.adjacencyList.push(edgeList)
        return vertex
    }

    addDirectedEdge(fromNode, toNode, weight) {
        const edge = new Edge(fromNode, toNode, weight)
        const edgeList = this.adjacencyList[fromNode.index]
        if (edgeList.edges !== undefined) {
            edgeList.addEdge(edge)
        } else {
            edgeList.edges = [edge]
        }
    }
}

export default Graph
