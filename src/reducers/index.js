import { combineReducers } from 'redux'
import financials from './financials'
import employees from './employees'
import products from './products'
import simulationState from './simulationState'

const rootReducer = combineReducers({
    financials,
    employees,
    products,
    simulationState
})

export default rootReducer
