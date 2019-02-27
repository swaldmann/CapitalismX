
import {
    HIRE_EMPLOYEE,
    FIRE_EMPLOYEE,
    TRAIN_EMPLOYEE,
    SET_WORKING_TIME_MODEL_INDEX,
    SET_WORKING_HOURS_INDEX,
    SET_COMPANY_CAR_INDEX,
    SET_FOOD_BENEFITS_INDEX,
    SET_GYM_BENEFITS_INDEX,
    SET_IT_EQUIPMENT_POLICY_INDEX,
    MONTHLY_HR_HISTORY_UPDATE
} from '../constants/ActionTypes'

import { EMPLOYEES } from '../constants/HRConstants'
import {
    HR_HISTORY
 } from '../constants/HRConstants'

export function employees(state = EMPLOYEES, action) {
    switch (action.type) {
        case HIRE_EMPLOYEE:
            return Object.assign({}, ...Object.keys(state).map(k => ({[k]: state[k].map(employee =>
                employee.index === action.index ? { ...employee, isEmployed: true } : employee
            )})))
        case FIRE_EMPLOYEE:
            return Object.assign({}, ...Object.keys(state).map(k => ({[k]: state[k].map(employee =>
                employee.index === action.index ? { ...employee, isEmployed: false } : employee
            )})))
        case TRAIN_EMPLOYEE:
            return Object.assign({}, ...Object.keys(state).map(k => ({[k]: state[k].map(employee =>
                employee.index === action.index ? { ...employee, skill: employee.skill + action.skillIncrease <= 100 ? employee.skill + action.skillIncrease : 100, salary: employee.salary *= (1 + action.salaryIncreasePercentage) } : employee
            )})))
        case MONTHLY_HR_HISTORY_UPDATE:
            return Object.assign({}, ...Object.keys(state).map(k => ({[k]: state[k].map(employee => {
                const fullHappinessThreshold = employee.skill/20 * 3
                const partialHappinessThreshold = employee.skill/20 * 2
                const happiness = action.jobSatisfactionPoints >= fullHappinessThreshold ? 2 : action.jobSatisfactionPoints >= partialHappinessThreshold ? 1 : 0
                return employee.happiness !== happiness ? { ...employee, happiness: happiness, jobSatisfaction: Math.sqrt(action.jobSatisfactionPoints)*33 } : employee
            })})))
        default:
        return state
    }
}

export const workingTimeModelIndex = (state = 0, action) => {
    switch (action.type) {
        case SET_WORKING_TIME_MODEL_INDEX:
            return action.index
        default:
            return state
    }
}

export const workingHoursIndex = (state = 1, action) => {
    switch (action.type) {
        case SET_WORKING_HOURS_INDEX:
            return action.index
        default:
            return state
    }
}

export const companyCarPolicyIndex = (state = 0, action) => {
    switch (action.type) {
        case SET_COMPANY_CAR_INDEX:
            return action.index
        default:
            return state
    }
}

export const itEquipmentPolicyIndex = (state = 0, action) => {
    switch (action.type) {
        case SET_IT_EQUIPMENT_POLICY_INDEX:
            return action.index
        default:
            return state
    }
}

export const foodBenefitsIndex = (state = 0, action) => {
    switch (action.type) {
        case SET_FOOD_BENEFITS_INDEX:
            return action.index
        default:
            return state
    }
}

export const gymMembershipIndex = (state = 0, action) => {
    switch (action.type) {
        case SET_GYM_BENEFITS_INDEX:
            return action.index
        default:
            return state
    }
}

export const hrHistory = (state = HR_HISTORY, action) => {
    switch (action.type) {
        case MONTHLY_HR_HISTORY_UPDATE:
            return state.concat(action.historyEntry)
        default:
            return state
    }
}
