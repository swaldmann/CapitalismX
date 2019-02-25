import { createSelector } from 'reselect'

export const getProducts = state => state.products
export const getTrucks = state => state.trucks
export const getMachines = state => state.machines
export const getWarehouses = state => state.warehouses

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
                totalCost + component.allComponents[component.currentIndex].cost,
                0
            )
        )
        return componentCosts
    }
)

export const getTruckValues = createSelector(
    [getTrucks],
    function(trucks) {
        return trucks.reduce((count, truck) => count + truck.price, 0)
    }
)

export const getMachineValues = createSelector(
    [getMachines],
    function(machines) {
        return machines.reduce((count, machine) => count + machine.price, 0)
    }
)

export const getWarehouseValues = createSelector(
    [getWarehouses],
    function(warehouses) {
        return warehouses.reduce((count, warehouse) => count + warehouse.price, 0)
    }
)
