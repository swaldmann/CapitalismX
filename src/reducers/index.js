import { combineReducers } from 'redux'
import financials from './financials'
import {employees, workingTimeModel, workingHours, companyCarPolicy, foodBenefits, gymMembership} from './employees'
import products from './products'
import simulationState from './simulationState'
import {marketing, campaigns, pressReleases, marketResearches} from './marketing'

const rootReducer = combineReducers({
    // Finance
    financials,

    // HR
    employees,
    workingTimeModel,
    workingHours,
    companyCarPolicy,
    foodBenefits,
    gymMembership,

    // Production
    products,

    // Marketing
    marketing,
    campaigns,
    pressReleases,
    marketResearches,

    // Simulation
    simulationState
})

export default rootReducer
