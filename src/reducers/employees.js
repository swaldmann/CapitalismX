import {
    HIRE_EMPLOYEE,
    FIRE_EMPLOYEE
} from '../constants/ActionTypes'

import *  as EmployeeConstants from '../models/constants/Employees'

const initialState = EmployeeConstants.ENGINEERS

export default function todos(state = initialState, action) {
    switch (action.type) {
        case HIRE_EMPLOYEE:
        return state.map(employee =>
            employee.index === action.index ? { ...employee, isEmployed: true } : employee
        )
        case FIRE_EMPLOYEE:
        return state.map(employee =>
            employee.index === action.index ? { ...employee, isEmployed: false } : employee
        )
        default:
        return state
    }
}
