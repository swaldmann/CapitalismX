import { combineReducers } from 'redux'
import financials from './financials'
import employees from './employees'
import products from './products'
import simulationState from './simulationState'
import campaignMediaTypes from './marketing'

const rootReducer = combineReducers({
    financials,
    employees,
    products,
    campaignMediaTypes,
    simulationState
})

export default rootReducer
