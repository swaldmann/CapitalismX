import {
    HIRE_EMPLOYEE,
    FIRE_EMPLOYEE
} from '../constants/ActionTypes'

import { EMPLOYEES } from '../constants/HRConstants'

const initialState = EMPLOYEES

export default function employees(state = initialState, action) {
    switch (action.type) {
        case HIRE_EMPLOYEE:
            return Object.assign({}, ...Object.keys(state).map(k => ({[k]: state[k].map(employee =>
                employee.index === action.index ? { ...employee, isEmployed: true } : employee
            )})))
        case FIRE_EMPLOYEE:
            return Object.assign({}, ...Object.keys(state).map(k => ({[k]: state[k].map(employee =>
                employee.index === action.index ? { ...employee, isEmployed: false } : employee
            )})))
        default:
        return state
    }
}
