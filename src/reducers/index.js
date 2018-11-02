import { combineReducers } from 'redux'
import employees from './employees'
import products from './products'
import visibilityFilter from './visibilityFilter'

const rootReducer = combineReducers({
    employees,
    products,
    visibilityFilter
})

export default rootReducer
