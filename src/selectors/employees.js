
import { createSelector } from 'reselect'
import {
    SHOW_HIRED, SHOW_AVAILABLE,
    ENGINEER_TYPE, SALESPEOPLE_TYPE
} from '../constants/HRConstants'
import {  } from '../constants/HRConstants'

const getVisibilityFilter = (state, props) => props.visibilityFilter || SHOW_HIRED

export const getAllEmployees = state => Object.values(state.employees).flatMap(n => n)
export const getAllHiredEmployees = state => Object.values(state.employees).flatMap(n => n).filter(e => e.isEmployed)
export const getAllEngineers = state => state.employees[ENGINEER_TYPE]
export const getAllSalespeople = state => state.employees[SALESPEOPLE_TYPE]
export const getAllHiredEngineers = state => state.employees[ENGINEER_TYPE].filter(e => e.isEmployed)
export const getAllHiredSalespeople = state => state.employees[SALESPEOPLE_TYPE].filter(e => e.isEmployed)

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

export const getTotalSalaries = createSelector(
    [getAllHiredEmployees],
    employees => (
        employees.reduce((count, employee) =>
            count + employee.salary,
            0
        )
    )
)

export const getTotalEngineerQualityOfWork = createSelector(
    [getAllHiredEngineers],
    engineers => (
        engineers.reduce((count, engineer) =>
            count + 0.5 * engineer.skill * (0.5 * Math.pow(engineer.jobSatisfaction, 1/3) * 33)/100,
            0
        )
    )
)

export const getTotalSalespeopleQualityOfWork = createSelector(
    [getAllHiredSalespeople],
    salespeople => (
        salespeople.reduce((count, salesperson) =>
            count + 0.5 * salesperson.skill + 0.5 * Math.sqrt(salesperson.jobSatisfaction) * 33,
            0
        )
    )
)

export const getHiredEmployeeCount = createSelector(
    [getAllHiredEmployees],
    employees => (
        employees.reduce((count, employee) =>
            count + 1,
            0
        )
    )
)
