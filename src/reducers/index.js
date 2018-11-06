import { combineReducers } from 'redux'
import employees from './employees'
import products from './products'

const rootReducer = combineReducers({
    employees,
    products
})

export default rootReducer
