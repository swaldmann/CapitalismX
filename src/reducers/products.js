import {
    SWITCH_CURRENT_COMPONENT,
    BUY_MACHINE,
    SELL_MACHINE,
    BUY_TRUCK,
    SELL_TRUCK
} from '../constants/ActionTypes'

import { PRODUCTS } from '../constants/ProductionConstants'

export function products(state = PRODUCTS, action) {
    switch (action.type) {
        case SWITCH_CURRENT_COMPONENT:
            return state.map(product =>
                product.index === action.productIndex ?
                ({ ...product, components: product.components.map(componentType =>
                    componentType.index === action.componentTypeIndex ? { ...componentType, currentIndex: action.componentIndex} : componentType
                )}) : product
            )
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
