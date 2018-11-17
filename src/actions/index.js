import * as types from '../constants/ActionTypes'

export const updateClock = () => {
    this.state.graph.recalculate()
}

export const startSimulation = () => ({ type: types.START_SIMULATION })
export const pauseSimulation = () => ({ type: types.PAUSE_SIMULATION })

// Finance
export const dailyFinancialUpdate = historyEntry => ({ type: types.DAILY_FINANCIAL_UPDATE, historyEntry: historyEntry})

// HR
export const hireEmployee = index => ({ type: types.HIRE_EMPLOYEE, index })
export const fireEmployee = index => ({ type: types.FIRE_EMPLOYEE, index })

// Production
export const switchCurrentComponent = (productIndex, componentTypeIndex, componentIndex) => ({ type: types.SWITCH_CURRENT_COMPONENT, productIndex, componentTypeIndex, componentIndex })

// Marketing
export const startCampaign = (campaignTemplate, campaignMediaTemplate) => ({ type: types.START_CAMPAIGN, campaignTemplate, campaignMediaTemplate })
