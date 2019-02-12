import {
    DAILY_FINANCIAL_UPDATE,
} from '../constants/ActionTypes'

import { FINANCIALS } from '../constants/FinanceConstants'

const initialState = FINANCIALS

export default function financials(state = initialState, action) {
    switch (action.type) {
        case DAILY_FINANCIAL_UPDATE:
            return { ...state, cash: action.historyEntry.netWorth,
                               history: state.history.concat({
                                        sales:                           action.historyEntry.sales,
                                        investments:                     action.historyEntry.investments,
                                        loans:                           action.historyEntry.loans,
                                        materialCosts:                   action.historyEntry.materialCosts,
                                        salaries:                        action.historyEntry.salaries,
                                        loanInterests:                   action.historyEntry.loanInterests,
                                        profit:                          action.historyEntry.profit
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
