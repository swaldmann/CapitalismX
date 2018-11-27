import {
    DAILY_FINANCIAL_UPDATE,
} from '../constants/ActionTypes'

import { FINANCIALS } from '../constants/FinanceConstants'

const initialState = FINANCIALS

export default function financials(state = initialState, action) {
    switch (action.type) {
        case DAILY_FINANCIAL_UPDATE:
            const cash = state.cash + action.historyEntry.sales - action.historyEntry.salaries
            return { ...state, cash: state.cash + action.historyEntry.sales - action.historyEntry.salaries,
                               history: state.history.concat({
                                        sales:                           action.historyEntry.sales,
                                        investments:                     action.historyEntry.investments,
                                        loans:                           action.historyEntry.loans,
                                        materialCosts:                   action.historyEntry.materialCosts,
                                        salaries:                        action.historyEntry.salaries,
                                        loanInterests:                   action.historyEntry.loanInterests
                                     }).slice(1),
                                elapsedDaysSinceFirstDayOfMonth: state.elapsedDaysSinceFirstDayOfMonth + 1,
                    }
            // Column-based approach
            /*return { ...state, cash: state.cash - action.costs,
                                history: { ...state.history,
                                    elapsedDaysSinceFirstDayOfMonth: state.history.elapsedDaysSinceFirstDayOfMonth + 1,
                                    salaries: state.history.salaries.length >= 4 ? state.history.salaries.concat(action.costs).slice(1) : state.history.salaries.concat(action.costs)
                                }
                            }*/
        default:
        return state
    }
}
