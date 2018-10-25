import * as types from '../constants/ActionTypes'

export const hireEmployee = index => ({ type: types.HIRE_EMPLOYEE, index })
export const fireEmployee = index => ({ type: types.FIRE_EMPLOYEE, index })
