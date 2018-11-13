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
            const totalRevenue = getAllEngineers(state).reduce((totalEngineerPoints, engineer) => engineer.isEmployed ? totalEngineerPoints + engineer.skill : totalEngineerPoints, 0) * getProductUtilities(state).reduce((totalUtility, utility) => totalUtility += utility, 0).toFixed(0)
            dispatch({ type: 'START_SIMULATION' })
            dispatch({ type: 'MAKE_REVENUE', revenue: totalRevenue })
            dispatch({ type: 'PAY_COSTS', costs: (totalCosts/365).toFixed(0) })
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
