import {
    combineReducers
} from 'redux'
import {
    financials,
    investments
} from './financials'
import {
    employees,
    hrHistory,
    workingTimeModelIndex,
    workingHoursIndex,
    companyCarPolicyIndex,
    itEquipmentPolicyIndex,
    foodBenefitsIndex,
    gymMembershipIndex
} from './employees'
import {
    products,
    machines,
    trucks,
    warehouses,
    logisticPartnerIndex,
    rAndDIndex,
    systemsSecurityIndex,
    processAutomationIndex,
    currentProductTemplateIndex,
    componentTypeTemplates
} from './products'
import simulationState from './simulationState'
import {
    marketing,
    campaigns,
    pressReleases,
    marketResearches
} from './marketing'

const appReducer = combineReducers({
    // Finance
    financials,
    investments,

    // HR
    employees,
    hrHistory,
    workingTimeModelIndex,
    workingHoursIndex,
    companyCarPolicyIndex,
    itEquipmentPolicyIndex,
    foodBenefitsIndex,
    gymMembershipIndex,

    // Production
    products,
    machines,
    trucks,
    warehouses,
    rAndDIndex,
    systemsSecurityIndex,
    processAutomationIndex,
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

const rootReducer = (state, action) => {
    if (action.type === 'CLEAR_STATE') {
        state = undefined
    }
    return appReducer(state, action)
}

export default rootReducer
