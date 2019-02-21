import {
    DAILY_PRODUCT_UPDATE,
    SWITCH_CURRENT_COMPONENT,
    INTRODUCE_NEW_PRODUCT,
    DEPRECATE_PRODUCT,
    SWITCH_CURRENT_PRODUCT_TEMPLATE,
    BUY_MACHINE,
    SELL_MACHINE,
    BUY_TRUCK,
    SELL_TRUCK,
    SWITCH_LOGISTIC_PARTNER,
    SWITCH_COMPONENT_TYPE_SUPPLIER
} from '../constants/ActionTypes'

import {
    ALL_COMPONENT_TEMPLATES
} from '../constants/ProductionConstants'

export function products(state = [], action) {
    switch (action.type) {
        case DAILY_PRODUCT_UPDATE:
            console.log(action.salesFigures);
            return state.map((product, i) => ({...product, unitsSold: product.unitsSold + action.salesFigures[i]}))
        case INTRODUCE_NEW_PRODUCT:
            return [action.productTemplate].concat(state)
        case DEPRECATE_PRODUCT:
            return state.filter(product => product.uuid !== action.productUuid)
        default:
        return state
    }
}

export function machines(state = [], action) {
    switch (action.type) {
        case BUY_MACHINE:
            return [action.machineTemplate].concat(state)
        case SELL_MACHINE:
            return state.filter(machine => machine.uuid !== action.machineUuid)
        default:
        return state
    }
}

export function trucks(state = [], action) {
    switch (action.type) {
        case BUY_TRUCK:
            return [action.truckTemplate].concat(state)
        case SELL_TRUCK:
            return state.filter(truck => truck.uuid !== action.truckUuid)
        default:
        return state
    }
}

export function componentTypeTemplates(state = ALL_COMPONENT_TEMPLATES, action) {
    switch (action.type) {
        case SWITCH_COMPONENT_TYPE_SUPPLIER:
            return state.map(componentType => componentType.uuid === action.uuid ? {...componentType, supplier: action.supplier} : componentType)
        case SWITCH_CURRENT_COMPONENT:
            return state.map((componentType, i) => i === action.componentTypeIndex ? {...componentType, currentIndex: action.componentIndex} : componentType )
        default:
            return state
    }
}

export const logisticPartnerIndex = (state = 0, action) => {
    switch (action.type) {
        case SWITCH_LOGISTIC_PARTNER:
            return action.logisticPartnerIndex
        default:
            return state
    }
}

export const currentProductTemplateIndex = (state = 0, action) => {
    switch (action.type) {
        case SWITCH_CURRENT_PRODUCT_TEMPLATE:
            return action.productCategoryTemplateIndex
        default:
            return state
    }
}
