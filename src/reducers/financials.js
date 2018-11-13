import {
    MAKE_REVENUE,
    PAY_COSTS
} from '../constants/ActionTypes'

const initialState = {
    assets: 0,
    cash: 0,
    history: {
        elapsedDaysSinceFirstDayOfMonth: 0,
        salaries: []
    }
}

export default function financials(state = initialState, action) {
    switch (action.type) {
        case MAKE_REVENUE:
            return { ...state, cash: state.cash + action.revenue}
        case PAY_COSTS:
        console.log(state);
            return { ...state, cash: state.cash - action.costs,
                                history: { ...state.history,
                                    elapsedDaysSinceFirstDayOfMonth: state.history.elapsedDaysSinceFirstDayOfMonth + 1,
                                    salaries: state.history.salaries.length >= 4 ? state.history.salaries.concat(action.costs).slice(1) : state.history.salaries.concat(action.costs)
                                }
                            }
        default:
        return state
    }
}
