import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import Menu from './components/Menu.js'
import Clock from './components/Clock.js'
import Map from './components/Map.js'
import Finance from './components/dialogs/Finance.js'
import HR from './components/dialogs/HR.js'
import Production from './components/dialogs/Production.js'
import Marketing from './components/dialogs/Marketing.js'

import SimulationGraph from './models/SimulationGraph.js'

import './styles/App.css'

class App extends Component {
    constructor() {
        super()
        this.state = {
            showMenu: true,
            isPlaying: false,
            elapsedDays: 0,
            clockIntervalID: undefined,
            graph: new SimulationGraph()
        }
    }

    /* Menu Actions */
    newGame = () => {
        this.hideMenu()
    }

    loadGame = () => {
        this.hideMenu()
    }

    showMenu = () => {
        this.setState({showMenu: true})
    }

    hideMenu = () => {
        this.setState({showMenu: false})
    }

    /* Time Actions */
    pause = () => {
        clearInterval(this.state.clockIntervalID)
        this.setState({isPlaying: false})
    }

    play = () => {
        const intervalID = setInterval(this.updateClock, 1000)
        this.setState({clockIntervalID: intervalID, isPlaying: true})
    }

    updateClock = () => {
        this.state.graph.adjacencyList.forEach(function(edgeList) {
            if (edgeList.edges === undefined) {
                return
            }
            edgeList.edges.forEach(function(edge) {
                edge.toNode.value += edge.fromNode.value/5 * edge.weight
            })
        })
        this.setState({elapsedDays: this.state.elapsedDays + 1})
    }

    componentDidMount() {
        this.play()
    }

    render() {
        return (
            <Router>
                <div id="App">
                    { <Map /> }
                    { this.state.showMenu && <Menu newGame={this.newGame} loadGame={this.loadGame} /> }
                    { !this.state.showMenu &&
                        <nav className="informationBar">
                            <ul>
                                <li><a onClick={this.showMenu}><i className="fas fa-ellipsis-h"></i>Menu</a></li>
                                <li><Link to="/finance"><i className="fas fa-coins"></i>${this.state.graph.netWorth.value.toLocaleString(navigator.language, { maximumFractionDigits: 0 })}</Link></li>
                                <li><Link to="/hr"><i className="fas fa-users"></i>{(this.state.graph.engineers.value.length + this.state.graph.salespeople.value.length).toLocaleString(navigator.language, { maximumFractionDigits: 0 })}</Link></li>
                                <li><Link to="/production"><i className="fas fa-wrench"></i>{this.state.graph.productionRate.value.toLocaleString(navigator.language, { maximumFractionDigits: 0 })}/week</Link></li>
                                <li><Link to="/marketing"><i className="fas fa-chart-line"></i>92%</Link></li>
                            </ul>
                            <Clock play={this.play} pause={this.pause} isPlaying={this.state.isPlaying} elapsedDays={this.state.elapsedDays} />
                        </nav>
                    }
                    <Route path="/finance" render={ () => <Finance /> }/>
                    <Route path="/hr" render={ () => <HR graph={this.state.graph} /> }/>
                    <Route path="/production" render={ () => <Production /> }/>
                    <Route path="/marketing" render={ () => <Marketing /> }/>
                </div>
            </Router>
        )
    }
}

export default App
