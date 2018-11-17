import { combineReducers } from 'redux'
import financials from './financials'
import employees from './employees'
import products from './products'
import simulationState from './simulationState'
import {campaigns} from './marketing'

const rootReducer = combineReducers({
    financials,
    employees,
    products,
    campaigns,
    simulationState
})

export default rootReducer
