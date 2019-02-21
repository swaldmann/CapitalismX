import {
    DAILY_FINANCIAL_UPDATE,
    PURCHASE
} from '../constants/ActionTypes'

import { FINANCIALS } from '../constants/FinanceConstants'

const initialState = FINANCIALS

export default function financials(state = initialState, action) {
    /*if (state.cash < 0) {
        alert(action.type)
        alert("Congratulations, you successfully lost. There is no money left. This is why I, a generous developer, give you an additional $50,000.")
        state.cash += 50000
        return state
    }*/
    switch (action.type) {
        case DAILY_FINANCIAL_UPDATE :
            return { ...state, cash: action.historyEntry.netWorth,
                            investmentAmount: action.historyEntry.investmentAmount,
                            investmentEarnings: action.historyEntry.investmentEarnings,
                               history: state.history.concat({
                                        sales:                           action.historyEntry.sales,
                                        investmentAmount: action.historyEntry.investmentAmount,
                                        investmentEarnings:                     action.historyEntry.investmentEarnings,
                                        loans:                           action.historyEntry.loans,
                                        materialCosts:                   action.historyEntry.materialCosts,
                                        salaries:                        action.historyEntry.salaries,
                                        loanInterests:                   action.historyEntry.loanInterests,
                                        profit:                          action.historyEntry.profit
                                     }).slice(1),
                                elapsedDaysSinceFirstDayOfMonth: state.elapsedDaysSinceFirstDayOfMonth + 1,
                    }
        case PURCHASE:
            return { ...state, cash: state.cash - action.amount }
        default:
            return state
    }
}
