import {
    SWITCH_CURRENT_COMPONENT
} from '../constants/ActionTypes'

import { PRODUCTS } from '../constants/ProductionConstants'

const initialState = PRODUCTS

export default function products(state = initialState, action) {
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
