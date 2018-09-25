import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import Menu from './components/Menu.js'
import Clock from './components/Clock.js'
import Map from './components/Map.js'
import Finance from './components/dialogs/Finance.js'
import HR from './components/dialogs/HR.js'
import Production from './components/dialogs/Production.js'
import Marketing from './components/dialogs/Marketing.js'

import './styles/App.css'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showMenu: true,
            isPlaying: false,
            elapsedDays: 0,
            clockIntervalID: undefined
        }
    }

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

    pause = () => {
        clearInterval(this.state.clockIntervalID)
        this.setState({isPlaying: false})
    }

    play = () => {
        const intervalID = setInterval(this.updateClock, 1000)
        this.setState({clockIntervalID: intervalID, isPlaying: true})
    }

    updateClock = () => {
        this.setState({elapsedDays: this.state.elapsedDays + 1})
    }

    componentDidMount() {
        this.play()
    }

    render() {
        return (
            <Router>
                <div id="App">
                    <Map />
                    { this.state.showMenu && <Menu newGame={this.newGame} loadGame={this.loadGame} /> }
                    { !this.state.showMenu &&
                        (<nav className="informationBar">
                            <ul>
                                <li><a onClick={this.showMenu}><i className="fas fa-ellipsis-h"></i>Menu</a></li>
                                <li><Link to="/finance"><i className="fas fa-coins"></i>$91,319</Link></li>
                                <li><Link to="/hr"><i className="fas fa-users"></i>214</Link></li>
                                <li><Link to="/production"><i className="fas fa-wrench"></i>503/week</Link></li>
                                <li><Link to="/marketing"><i className="fas fa-chart-line"></i>92%</Link></li>
                            </ul>
                            <div className="time">
                                { this.state.isPlaying && <button id="pauseButton" onClick={this.pause}><i className="fa fa-fw fa-pause"></i></button> }
                                { !this.state.isPlaying && <button id="playButton" onClick={this.play}><i className="fa fa-fw fa-play"></i></button> }
                                <Clock elapsedDays={this.state.elapsedDays} />
                            </div>
                        </nav>)
                    }
                    <Route path="/finance" component={Finance} />
                    <Route path="/hr" component={HR} />
                    <Route path="/production" component={Production} />
                    <Route path="/marketing" component={Marketing} />
                </div>
            </Router>
        )
    }
}

export default App
