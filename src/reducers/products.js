import {
    DAILY_PRODUCT_UPDATE,
    DAILY_MACHINE_CAPACITIES_UPDATE,
    MONTHLY_COMPONENT_UPDATES,
    SWITCH_CURRENT_COMPONENT,
    INTRODUCE_NEW_PRODUCT,
    DEPRECATE_PRODUCT,
    SWITCH_CURRENT_PRODUCT_TEMPLATE,
    BUY_MACHINE,
    SELL_MACHINE,
    SWITCH_R_AND_D_INDEX,
    SWITCH_SYSTEMS_SECURITY_INDEX,
    SWITCH_PROCESS_AUTOMATION_INDEX,
    BUY_TRUCK,
    SELL_TRUCK,
    BUY_WAREHOUSE,
    SELL_WAREHOUSE,
    SWITCH_LOGISTIC_PARTNER,
    SWITCH_COMPONENT_TYPE_SUPPLIER
} from '../constants/ActionTypes'

import {
    ALL_COMPONENT_TEMPLATES
} from '../constants/ProductionConstants'

export function products(state = [], action) {
    switch (action.type) {
        case DAILY_PRODUCT_UPDATE:
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
        case DAILY_MACHINE_CAPACITIES_UPDATE:
            return state.map((machine, i) => {
                return ({...machine, dailyUsedCapacity: action.capacities[i]})
            })
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

export function warehouses(state = [], action) {
    switch (action.type) {
        case BUY_WAREHOUSE:
            return [action.warehouseTemplate].concat(state)
        case SELL_WAREHOUSE:
            return state.filter(warehouse => warehouse.uuid !== action.warehouseUuid)
        default:
            return state
    }
}

function componentCost(component, elapsedMonths) {
    const y_a = component.availabilityOffset
    const t = elapsedMonths/12
    const p = component.baseCost
    const result = (-0.0001 * Math.pow(t+1-y_a, 5) + 0.0112 * Math.pow(t+1-y_a, 4) - 0.4239 * Math.pow(t+1-y_a,3) + 7.3219 * Math.pow(t+1-y_a,2) - 49.698 * (t+1-y_a) + 143.32) * p/100
    return result
}

export function componentTypeTemplates(state = ALL_COMPONENT_TEMPLATES, action) {
    switch (action.type) {
        case SWITCH_COMPONENT_TYPE_SUPPLIER:
            return state.map(componentType => componentType.index === action.componentType ? {...componentType, supplier: action.supplier} : componentType)
        case SWITCH_CURRENT_COMPONENT:
            return state.map((componentType, i) => i === action.componentTypeIndex ? {...componentType, currentIndex: action.componentIndex} : componentType )
        case MONTHLY_COMPONENT_UPDATES:
            return state.map((componentType, i) => ({...componentType, allComponents: componentType.allComponents.map(component => ({...component, cost: componentCost(component, action.elapsedMonths)}))}))
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

export const rAndDIndex = (state = 0, action) => {
    switch (action.type) {
        case SWITCH_R_AND_D_INDEX:
            return action.index
        default:
            return state
    }
}

export const systemsSecurityIndex = (state = 0, action) => {
    switch (action.type) {
        case SWITCH_SYSTEMS_SECURITY_INDEX:
            return action.index
        default:
            return state
    }
}

export const processAutomationIndex = (state = 0, action) => {
    switch (action.type) {
        case SWITCH_PROCESS_AUTOMATION_INDEX:
            return action.index
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
