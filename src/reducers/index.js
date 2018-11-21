import { combineReducers } from 'redux'
import financials from './financials'
import employees from './employees'
import workingTimeModel from './workingTimeModel'
import products from './products'
import simulationState from './simulationState'
import {campaigns, pressReleases, marketResearches} from './marketing'

const rootReducer = combineReducers({
    financials,
    employees,
    workingTimeModel,
    products,
    campaigns,
    pressReleases,
    marketResearches,
    simulationState
})

export default rootReducer
