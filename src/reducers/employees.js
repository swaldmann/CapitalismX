import {
    HIRE_EMPLOYEE,
    FIRE_EMPLOYEE,
    TRAIN_EMPLOYEE,
    SET_WORKING_TIME_MODEL,
    SET_WORKING_HOURS,
    SET_COMPANY_CAR,
    SET_FOOD_BENEFITS,
    SET_GYM_BENEFITS,
    MONTHLY_HR_HISTORY_UPDATE
} from '../constants/ActionTypes'

import { EMPLOYEES } from '../constants/HRConstants'
import {
    WORKING_TIME_MODEL_FIXED,
    WORKING_HOURS_8,
    COMPANY_CAR_NONE,
    FOOD_BENEFITS_NONE,
    GYM_MEMBERSHIP_NONE,
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
                employee.index === action.index ? { ...employee, skill: employee.skill + action.skillIncrease <= 5 ? employee.skill + action.skillIncrease : 5, salary: employee.salary *= (1 + action.salaryIncreasePercentage) } : employee
            )})))
        case MONTHLY_HR_HISTORY_UPDATE:
            return Object.assign({}, ...Object.keys(state).map(k => ({[k]: state[k].map(employee => {
                const fullHappinessThreshold = employee.skill * 3
                const partialHappinessThreshold = employee.skill * 2
                const happiness = action.jobSatisfactionPoints >= fullHappinessThreshold ? 2 : action.jobSatisfactionPoints >= partialHappinessThreshold ? 1 : 0
                return employee.happiness !== happiness ? { ...employee, happiness: happiness} : employee
            })})))
        default:
        return state
    }
}

export const workingTimeModel = (state = WORKING_TIME_MODEL_FIXED, action) => {
    switch (action.type) {
        case SET_WORKING_TIME_MODEL:
            return action.model
        default:
            return state
    }
}

export const workingHours = (state = WORKING_HOURS_8, action) => {
    switch (action.type) {
        case SET_WORKING_HOURS:
            return action.workingHours
        default:
            return state
    }
}

export const companyCarPolicy = (state = COMPANY_CAR_NONE, action) => {
    switch (action.type) {
        case SET_COMPANY_CAR:
            return action.companyCarPolicy
        default:
            return state
    }
}

export const foodBenefits = (state = FOOD_BENEFITS_NONE, action) => {
    switch (action.type) {
        case SET_FOOD_BENEFITS:
            return action.foodBenefits
        default:
            return state
    }
}

export const gymMembership = (state = GYM_MEMBERSHIP_NONE, action) => {
    switch (action.type) {
        case SET_GYM_BENEFITS:
            return action.gymMembership
        default:
            return state
    }
}

export const hrHistory = (state = HR_HISTORY, action) => {
    switch (action.type) {
        case MONTHLY_HR_HISTORY_UPDATE:
            return state.concat(action.historyEntry).slice(1)
        default:
            return state
    }
}
