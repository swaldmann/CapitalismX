import {
    MAKE_REVENUE,
    PAY_COSTS
} from '../constants/ActionTypes'

const initialState = {
    netWorth: 0
}

export default function financials(state = initialState, action) {
    switch (action.type) {
        case MAKE_REVENUE:
            return { ...state, netWorth: state.netWorth + action.revenue}
        case PAY_COSTS:
            return { ...state, netWorth: state.netWorth - action.costs}
        default:
        return state
    }
}
