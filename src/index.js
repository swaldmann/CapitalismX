import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import rootReducer from './reducers'
import {advanceTime} from './actions'
import { getProductUtilities } from './selectors/products'
import { getAllEmployees } from './selectors/employees'

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk))

function startSimulation() {
    return (dispatch) => {
        setInterval(function() {
            const state = store.getState()
            dispatch({ type: 'START_SIMULATION' })
            dispatch({ type: 'MAKE_REVENUE', revenue: getProductUtilities(state).reduce((totalUtility, utility) => totalUtility += utility, 0) })
            //dispatch({ type: 'PAY_COSTS', costs: getAllEmployees(state).reduce((totalSkills, utility) => totalUtility += ugtility, 0) })
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
