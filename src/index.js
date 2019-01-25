import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import rootReducer from './reducers'
import { getProductUtilities } from './selectors/products'
import { getAllEngineers, getAllSalespeople, getAllEmployees } from './selectors/employees'
import { dailyFinancialUpdate } from './actions'
import SimulationGraph from './models/SimulationGraph'

var simulationGraph

const store = createStore(
    rootReducer,
    //applyMiddleware(thunk)
    compose(
        applyMiddleware(thunk)//,
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

function startSimulation() {
    simulationGraph = new SimulationGraph()

    return (dispatch) => {
        setInterval(function() {
            simulate(dispatch)
        }, 3000)
    }
}

function simulate(dispatch) {
    const state = store.getState()

    // Selectors
    const employees = getAllEmployees(state)
    const engineers = getAllEngineers(state)
    const salespeople = getAllSalespeople(state)
    const productUtilities = getProductUtilities(state)

    // Reducers
    const reducedValues = {
        totalSalaries: employees.reduce((totalSalaries, employee) => employee.isEmployed ? totalSalaries + employee.salary : totalSalaries, 0),
        //averageEmployeeSatisfaction: employees.reduce((totalEmployeeSatisfaction, employee) => employee.isEmployed ? totalEmployeeSatisfaction + employee.happiness : totalEmployeeSatisfaction, 0)/employees.length,
        totalEngineerSkills: engineers.reduce((totalEngineerSkills, engineer) => engineer.isEmployed ? totalEngineerSkills + engineer.skill : totalEngineerSkills, 0),
        totalSalespeopleSkills: salespeople.reduce((totalSalespeopleSkills, salesperson) => salesperson.isEmployed ? totalSalespeopleSkills + salesperson.skill : totalSalespeopleSkills, 0),
        totalProductUtilities: productUtilities.reduce((totalUtility, utility) => totalUtility += utility, 0)
    }
    simulationGraph.updateVertices(reducedValues)
    simulationGraph.forwardTime()
    console.log(simulationGraph)

    if (state.simulationState.isPlaying) {
        dispatch({ type: 'START_SIMULATION' })
        const history = {
            sales: simulationGraph.getVertexValue("totalSales"),
            investments: 0,
            loans: 0,
            salaries: simulationGraph.getVertexValue("totalSalaries")/365,
            materialCosts: 0,
            loanInterests: 0
        }
        dispatch(dailyFinancialUpdate(history))
    }
}

store.dispatch(startSimulation())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

registerServiceWorker()
