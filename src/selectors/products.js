import { createSelector } from 'reselect'

export const getProducts = state => state.products

export const makeGetVisibleProducts = () => {
    return createSelector(
        [getProducts],
        (products) => {
            return products
        }
    )
}

export const getProductPrices = createSelector(
    [getProducts],
    (products) => {
        const productPrices = products.map(product => product.price)
        return productPrices
    }
)

export const getProductUtilities = createSelector(
    [getProducts],
    function(products) {
        const productUtilities = products.map(product =>
            product.components.reduce((totalUtility, component) =>
                totalUtility + component.allComponents[component.currentIndex].baseUtility,
                0
            )
        )
        return productUtilities
    }
)

export const getProductComponentCosts = createSelector(
    [getProducts],
    function(products) {
        const componentCosts = products.map(product =>
            product.components.reduce((totalCost, component) =>
                totalCost + component.allComponents[component.currentIndex].baseCost,
                0
            )
        )
        return componentCosts
    }
)

// Manufacturing
export const getMachines = state => state.machines

// logistics
export const getTrucks = state => state.trucks
