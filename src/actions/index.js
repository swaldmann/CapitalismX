import * as types from '../constants/ActionTypes'

export const hireEmployee = id => ({ type: types.HIRE_EMPLOYEE, id })
export const fireEmployee = id => ({ type: types.FIRE_EMPLOYEE, id })
