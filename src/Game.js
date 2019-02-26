import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import Menu from './components/Menu.js'
import Clock from './components/Clock.js'
import Map from './components/Map.js'
import Finance from './components/dialogs/Finance.js'
import HR from './components/dialogs/HR.js'
import Production from './components/dialogs/Production.js'
import Marketing from './components/dialogs/Marketing.js'
import VisibleMenuField from './containers/VisibleMenuField.js'

class Game extends React.Component {
    render() {
        const {actions, cash, simulationState } = this.props
        return (
            <Router basename="/CapitalismX">
                <div id="App">
                    { <Map /> }
                    { simulationState.showMenu && <Menu actions={actions} /> }
                    { !simulationState.showMenu &&
                        <nav className="informationBar">
                            <ul>
                                <li><button onClick={actions.showMenu}><i className="fas fa-ellipsis-h"></i>Menu</button></li>
                                <li><Link to="/finance"><i className="fas fa-coins"></i>${cash.toLocaleString(navigator.language, { maximumFractionDigits: 0 })}</Link></li>
                                <li><Link to="/hr"><i className="fas fa-users"></i>{<VisibleMenuField />}</Link></li>
                                <li><Link to="/production"><i className="fas fa-wrench"></i>{0}/week</Link></li>
                                <li><Link to="/marketing"><i className="fas fa-chart-line"></i>0%</Link></li>
                            </ul>
                            <Clock play={actions.startSimulation} pause={actions.pauseSimulation} isPlaying={simulationState.isPlaying} elapsedDays={simulationState.elapsedDays} />
                        </nav>
                    }
                    <Route path="/finance" render={ () => <Finance /> }/>
                    <Route path="/hr" render={ () => <HR /> }/>
                    <Route path="/production" render={ () => <Production /> }/>
                    <Route path="/marketing" render={ () => <Marketing /> }/>
                </div>
            </Router>
        )
    }
}

export default Game
