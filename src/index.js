import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, /*compose*/ } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import rootReducer from './reducers'
import { getProductUtilities } from './selectors/products'
import { getAllEngineers, getAllSalespeople, getAllEmployees } from './selectors/employees'
import { dailyFinancialUpdate } from './actions'

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
    /*compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )*/
)

function startSimulation() {
    return (dispatch) => {
        setInterval(function() {
            simulate(dispatch)
        }, 3000)
    }
}

function simulate(dispatch) {
    const state = store.getState()
    const employees = getAllEmployees(state)
    const engineers = getAllEngineers(state)
    const salespeople = getAllSalespeople(state)
    const productUtilities = getProductUtilities(state)

    const totalSalaries = employees.reduce((totalSalaries, employee) => employee.isEmployed ? totalSalaries + employee.salary : totalSalaries, 0)
    const totalEngineerSkills = engineers.reduce((totalEngineerSkills, engineer) => engineer.isEmployed ? totalEngineerSkills + engineer.skill : totalEngineerSkills, 0)
    const totalSalespeopleSkills = salespeople.reduce((totalSalespeopleSkills, salesperson) => salesperson.isEmployed ? totalSalespeopleSkills + salesperson.skill : totalSalespeopleSkills, 0)
    const totalProductUtilities = productUtilities.reduce((totalUtility, utility) => totalUtility += utility, 0)
    const totalSales = (totalEngineerSkills * totalProductUtilities * (1 + totalSalespeopleSkills/10))
    if (state.simulationState.isPlaying) {
        dispatch({ type: 'START_SIMULATION' })
        const history = {
            sales: totalSales,
            investments: 0,
            loans: 0,
            salaries: (totalSalaries/365),
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
