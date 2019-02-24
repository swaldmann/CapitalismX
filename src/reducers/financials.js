import {
    DAILY_FINANCIAL_UPDATE,
    DAILY_INVESTMENTS_UPDATE,
    QUARTERLY_FINANCIAL_HISTORY_ENTRY,
    PURCHASE,
    BUY_FUND,
    SELL_FUND
} from '../constants/ActionTypes'

import { FINANCIALS, INVESTMENTS } from '../constants/FinanceConstants'

export function financials(state = FINANCIALS, action) {
    /*if (state.cash < 0) {
        alert(action.type)
        alert("Congratulations, you successfully lost. There is no money left. This is why I, a generous developer, give you an additional $50,000.")
        state.cash += 50000
        return state
    }*/
    switch (action.type) {
        case DAILY_FINANCIAL_UPDATE:
            return action.financials
        case QUARTERLY_FINANCIAL_HISTORY_ENTRY:
            return  { ...state, history: state.history.concat({...action.financials, history: undefined}).slice(1) }
        case PURCHASE:
            /*if (state.cash <= action.amount) {
                alert("This action can't be done. You are bankrupt.")
                return state
            }*/
            return { ...state, cash: state.cash - action.amount }
        default:
            return state
    }
}

export function investments(state = INVESTMENTS, action) {
    switch (action.type) {
        case BUY_FUND:
            return state.map(investment => investment.uuid === action.uuid ? {...investment, amount: investment.amount + action.amount} : investment)
        case SELL_FUND:
            return state.map(investment => investment.uuid === action.uuid ? {...investment, amount: investment.amount - action.amount} : investment)
        case DAILY_INVESTMENTS_UPDATE:
            return state.map((investment, i) => ({...investment, amount: investment.amount + action.investmentEarnings[i]}))
        default:
            return state
    }
}
