import {
    HIRE_EMPLOYEE,
    FIRE_EMPLOYEE
} from '../constants/ActionTypes'

import { EMPLOYEES } from '../constants/EmployeeFilters'

const initialState = EMPLOYEES

export default function employees(state = initialState, action) {
    // TODO: Use just one type for employees
    switch (action.type) {
        case HIRE_EMPLOYEE:
            if (Array.isArray(state)) {
                return state.map(employee =>
                    employee.index === action.index ? { ...employee, isEmployed: true } : employee
                )
            }
            else {
                return Object.assign({}, ...Object.keys(state).map(k => ({[k]: state[k].map(employee =>
                    employee.index === action.index ? { ...employee, isEmployed: true } : employee
                )})))
            }
        case FIRE_EMPLOYEE:
        if (Array.isArray(state)) {
            return state.map(employee =>
                employee.index === action.index ? { ...employee, isEmployed: false } : employee
            )
        }
        else {
            return Object.assign({}, ...Object.keys(state).map(k => ({[k]: state[k].map(employee =>
                employee.index === action.index ? { ...employee, isEmployed: false } : employee
            )})))
        }
        default:
        return state
    }
}
