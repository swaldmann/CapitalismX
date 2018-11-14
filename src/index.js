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
            const state = store.getState()
            const totalCosts = getAllEmployees(state).reduce((totalSalaries, employee) => employee.isEmployed ? totalSalaries + employee.salary : totalSalaries, 0).toFixed(0)
            const totalSales = getAllEngineers(state).reduce((totalEngineerPoints, engineer) => engineer.isEmployed ? totalEngineerPoints + engineer.skill : totalEngineerPoints, 0) * getProductUtilities(state).reduce((totalUtility, utility) => totalUtility += utility, 0).toFixed(0)
            if (state.simulationState.isPlaying) {
                dispatch({ type: 'START_SIMULATION' })
                const history = {
                    sales: totalSales,
                    investments: 0,
                    loans: 0,
                    salaries: (totalCosts/365).toFixed(0),
                    materialCosts: 0,
                    loanInterests: 0
                }
                dispatch(dailyFinancialUpdate(history))
            }
        }, 3000);
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
