import { createSelector } from 'reselect'
import { SHOW_HIRED, SHOW_AVAILABLE } from '../constants/EmployeeFilters'

const getVisibilityFilter = state => state.visibilityFilter
const getEmployees = state => state.employees

export const getVisibleEmployees = createSelector(
    [getVisibilityFilter, getEmployees],
    (visibilityFilter, employees) => {
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

export const getHiredEmployeeCount = createSelector(
    [getEmployees],
    employees => (
        employees.reduce((count, employee) =>
            employee.isEmployed ? count + 1 : count,
            0
        )
    )
)
