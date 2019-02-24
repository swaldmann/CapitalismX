import { combineReducers } from 'redux'
import {financials, investments} from './financials'
import {employees, hrHistory, workingTimeModel, workingHours, companyCarPolicy, foodBenefits, gymMembership} from './employees'
import {products, machines, trucks, warehouses, logisticPartnerIndex, currentProductTemplateIndex, componentTypeTemplates} from './products'
import simulationState from './simulationState'
import {marketing, campaigns, pressReleases, marketResearches} from './marketing'

const rootReducer = combineReducers({
    // Finance
    financials,
    investments,

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
    warehouses,
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
