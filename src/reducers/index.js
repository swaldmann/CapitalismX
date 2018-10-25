import { combineReducers } from 'redux'
import employees from './employees'
import visibilityFilter from './visibilityFilter'

const rootReducer = combineReducers({
    employees,
    visibilityFilter
})

export default rootReducer
