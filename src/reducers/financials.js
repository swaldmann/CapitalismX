import {
    DAILY_FINANCIAL_UPDATE,
    DAILY_INVESTMENTS_UPDATE,
    DAILY_FINANCIAL_HISTORY_ENTRY,
    QUARTERLY_FINANCIAL_HISTORY_ENTRY,
    PURCHASE,
    PURCHASE_ASSET,
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
            return { ...state,
                netWorth: action.financials.netWorth,
                cash: action.financials.cash,
                assets: action.financials.assets,
                liabilities: action.financials.liabilities
            }
        case DAILY_FINANCIAL_HISTORY_ENTRY:
            const lastIndex = state.history.length - 1
            return { ...state, history: state.history.map((entry, i) => {
                            if (i === lastIndex) {
                                return Object.assign({}, ...Object.keys(entry).map(k => ({[k]: action.financials[k] + entry[k]})))
                            }
                            return entry
                        })
                    }
        case QUARTERLY_FINANCIAL_HISTORY_ENTRY:
            return { ...state, history: state.history.concat({...action.financials, history: 0})}
        case PURCHASE:
            /*if (state.cash <= action.amount) {
                alert("This action can't be done. You are bankrupt.")
                return state
            }*/
            return { ...state, cash: state.cash - action.amount }
        case PURCHASE_ASSET:
            return { ...state, cash: state.cash - action.amount, assets: state.assets + action.amount }
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
