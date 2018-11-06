import * as types from '../constants/ActionTypes'

// HR
export const hireEmployee = index => ({ type: types.HIRE_EMPLOYEE, index })
export const fireEmployee = index => ({ type: types.FIRE_EMPLOYEE, index })

// Production
export const switchCurrentComponent = (productIndex, componentTypeIndex, componentIndex) => ({ type: types.SWITCH_CURRENT_COMPONENT, productIndex, componentTypeIndex, componentIndex })
