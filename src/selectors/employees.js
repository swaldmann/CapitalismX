import { createSelector } from 'reselect'
import {
    SHOW_HIRED, SHOW_AVAILABLE,
    ENGINEER_TYPE, SALESPEOPLE_TYPE
} from '../constants/HRConstants'
import {  } from '../constants/HRConstants'

const getVisibilityFilter = (state, props) => props.visibilityFilter || SHOW_HIRED

export const getAllEmployees = state => Object.values(state.employees).flatMap(n => n)
export const getAllEngineers = state => state.employees[ENGINEER_TYPE]
export const getAllSalespeople = state => state.employees[SALESPEOPLE_TYPE]

const getEmployees = (state, props) => Array.isArray(state.employees) ?  state.employees : state.employees[props.employeeType]

const getEmployeeType = (state, props) => props.employeeType

export const makeGetVisibleEmployees = () => {
    return createSelector(
        [getVisibilityFilter, getEmployees, getEmployeeType],
        (visibilityFilter, employees, employeeType) => {
            switch (visibilityFilter) {
                case SHOW_HIRED:
                    return employees.filter(e => e.isEmployed)
                case SHOW_AVAILABLE:
                    return employees.filter(e => !e.isEmployed)
                default:
                    throw new Error('Unknown filter: ' + visibilityFilter)
            }
        }
    )
}

export const getHiredEmployeeCount = createSelector(
    [getAllEmployees],
    employees => (
        employees.reduce((count, employee) =>
            employee.isEmployed ? count + 1 : count,
            0
        )
    )
)
