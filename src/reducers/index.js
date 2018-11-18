import { combineReducers } from 'redux'
import financials from './financials'
import employees from './employees'
import products from './products'
import simulationState from './simulationState'
import {campaigns, pressReleases, marketResearches} from './marketing'

const rootReducer = combineReducers({
    financials,
    employees,
    products,
    campaigns,
    pressReleases,
    marketResearches,
    simulationState
})

export default rootReducer
