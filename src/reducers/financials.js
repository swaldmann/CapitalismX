import {
    DAILY_FINANCIAL_UPDATE,
    QUARTERLY_FINANCIAL_HISTORY_ENTRY,
    PURCHASE
} from '../constants/ActionTypes'

import { FINANCIALS } from '../constants/FinanceConstants'
import {deepCopy} from '../util/Misc'

const initialState = FINANCIALS

export default function financials(state = initialState, action) {
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
            return { ...state, cash: state.cash - action.amount }
        default:
            return state
    }
}
