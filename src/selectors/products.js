import { createSelector } from 'reselect'
import { getTotalEngineerQualityOfWork } from './employees'
import { PRODUCT_TEMPLATES } from '../constants/ProductionConstants'
import { dateForElapsedDays } from '../util/Misc'

export const getProducts = state => state.products
export const getTrucks = state => state.trucks
export const getMachines = state => state.machines
export const getWarehouses = state => state.warehouses
const getRAndDIndex = state => state.rAndDIndex
const getSystemsSecurityIndex = state => state.systemsSecurityIndex
const getProcessAutomationIndex = state => state.processAutomationIndex
const getElapsedDays = state => state.simulationState.elapsedDays

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
        return products.map(product => product.price)
    }
)

export const getProcurementQualities = createSelector(
    [getProducts],
    (products) => {
        return products.map(product =>
            product.components.reduce((totalUtility, component) =>
                totalUtility + component.allComponents[component.currentIndex].baseUtility * component.supplier.qualityMultiplicator,
                0
            )
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

export const getAverageMachineTechnology = createSelector(
    [getMachines],
    machines => machines.reduce((count, machine) => count + machine.technologyLevel/machines.length, 0)
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
    (warehouses) =>
        warehouses.reduce((count, warehouse) => count + warehouse.price, 0)
)

/* Demand */

// Maximum procurement quality for our own products for each product type.
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

// Maximum total quality for our own products for each product type.
export const getMaximumTotalQualityForProductTypes = createSelector(
    [getMaximumProcurementQualityForProductTypes,
     getAverageMachineTechnology,
     getRAndDIndex,
     getSystemsSecurityIndex,
     getProcessAutomationIndex,
     getTotalEngineerQualityOfWork
    ],
    (maximumProcurementQualityForProductTypes,
     averageMachineTechnology,
     rAndDIndex,
     systemsSecurityIndex,
     processAutomationIndex,
     totalEngineerQualityOfWork) => {
        return maximumProcurementQualityForProductTypes.map(procurementQuality => {
            const rAndDFactor = 0.8 + 0.1 * (rAndDIndex + 1)
            const systemsSecurityFactor = 0.8 + 0.1 * (systemsSecurityIndex + 1)
            const processAutomationFactor = 0.8 + 0.1 * (processAutomationIndex + 1)
            const productionTechnologyFactor = 0.5 + 0.25 * averageMachineTechnology
            return procurementQuality * productionTechnologyFactor * rAndDFactor * systemsSecurityFactor * processAutomationFactor * totalEngineerQualityOfWork
        })
    }
)

export const getMaximumMarketQualityForProductTypes = createSelector(
    [getElapsedDays],
    (elapsedDays) =>
        PRODUCT_TEMPLATES.map(product => {
            return product.components.reduce((totalProductQuality, componentCategory) => {
                const currentGameYear = dateForElapsedDays(elapsedDays).getFullYear() - 1990
                return totalProductQuality + componentCategory.allComponents.reduce((highestComponentUtility, category) =>
                    category.availabilityOffset > currentGameYear ? highestComponentUtility : Math.max(highestComponentUtility, category.baseUtility), 0)
            }, 0)
        })
)

export const getMaximumProxyQualityForProductTypes = createSelector(
    [getMaximumMarketQualityForProductTypes,
     getMaximumTotalQualityForProductTypes,
    ],
    (maximumMarketQualityForProductTypes, maximumTotalQualityForProductTypes) =>
        maximumMarketQualityForProductTypes.map((marketQuality, i) => Math.max(marketQuality, maximumTotalQualityForProductTypes[i]))
)
