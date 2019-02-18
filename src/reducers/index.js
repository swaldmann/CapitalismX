import { combineReducers } from 'redux'
import financials from './financials'
import {employees, hrHistory, workingTimeModel, workingHours, companyCarPolicy, foodBenefits, gymMembership} from './employees'
import {products, machines, trucks} from './products'
import simulationState from './simulationState'
import {marketing, campaigns, pressReleases, marketResearches} from './marketing'

const rootReducer = combineReducers({
    // Finance
    financials,

    // HR
    employees,
    hrHistory,
    workingTimeModel,
    workingHours,
    companyCarPolicy,
    foodBenefits,
    gymMembership,

    // Production
    products,
    machines,
    trucks,

    // Marketing
    marketing,
    campaigns,
    pressReleases,
    marketResearches,

    // Simulation
    simulationState
})

export default rootReducer
