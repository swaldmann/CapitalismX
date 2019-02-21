import { combineReducers } from 'redux'
import financials from './financials'
import {employees, hrHistory, workingTimeModel, workingHours, companyCarPolicy, foodBenefits, gymMembership} from './employees'
import {products, machines, trucks, logisticPartnerIndex, currentProductTemplateIndex, componentTypeTemplates} from './products'
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
    logisticPartnerIndex,
    currentProductTemplateIndex,
    componentTypeTemplates,

    // Marketing
    marketing,
    campaigns,
    pressReleases,
    marketResearches,

    // Simulation
    simulationState
})

export default rootReducer
