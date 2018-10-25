import { SET_VISIBILITY_FILTER } from '../constants/ActionTypes'
import { SHOW_HIRED } from '../constants/EmployeeFilters'

const visibilityFilter = (state = SHOW_HIRED, action) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
        return action.filter
        default:
        return state
    }
}

export default visibilityFilter
