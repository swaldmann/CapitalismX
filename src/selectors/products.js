import { createSelector } from 'reselect'
import { PRODUCT_TEMPLATES } from '../constants/ProductionConstants'

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

export const getProcurementQualities = createSelector(
    [getProducts],
    function(products) {
        const productUtilities = products.map(product =>
            product.components.reduce((totalUtility, component) =>
                totalUtility + component.allComponents[component.currentIndex].baseUtility * component.supplier.qualityMultiplicator,
                0
            )
        )
        return productUtilities
    }
)

// This servers as a proxy value for the demand calculation for a specific product.
export const getMaximumMarketQualityForProductTypes = createSelector(
    [getProducts],

)

export const getMaximumProcurementQualityForProductTypes = createSelector(
    [getProducts,
    getProcurementQualities],
    (products, procurementQualities) => {
        return products.reduce((maxQualities, p, i) =>
                    maxQualities.map((currentMaxQuality, j) =>
                        j === p.productCategoryIndex && procurementQualities[i] > maxQualities[p.productCategoryIndex] ? procurementQualities[i] : currentMaxQuality
                    ),
                    [0,0,0,0]
                )
        }
)

export const getProductComponentCosts = createSelector(
    [getProducts],
    function(products) {
        const componentCosts = products.map(product =>
            product.components.reduce((totalCost, component) =>
                totalCost + component.allComponents[component.currentIndex].cost * component.supplier.costMultiplicator,
                0
            )
        )
        return componentCosts
    }
)

export const getTotalTruckCosts = createSelector(
    [getTrucks],
    function(trucks) {
        return trucks.reduce((count, truck) => count + truck.dailyFixCost, 0)
    }
)

export const getTruckValues = createSelector(
    [getTrucks],
    function(trucks) {
        return trucks.reduce((count, truck) => count + truck.price, 0)
    }
)

export const getTotalMachineCosts = createSelector(
    [getMachines],
    function(machines) {
        return machines.reduce((count, machine) => count + machine.dailyFixCost, 0)
    }
)

export const getMachineValues = createSelector(
    [getMachines],
    function(machines) {
        return machines.reduce((count, machine) => count + machine.price, 0)
    }
)

export const getTotalWarehouseCosts = createSelector(
    [getWarehouses],
    function(warehouses) {
        return warehouses.reduce((count, warehouse) => count + warehouse.dailyFixCost, 0)
    }
)

export const getWarehouseValues = createSelector(
    [getWarehouses],
    function(warehouses) {
        return warehouses.reduce((count, warehouse) => count + warehouse.price, 0)
    }
)
