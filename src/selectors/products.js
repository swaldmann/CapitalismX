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

export const getTotalUnitsSold = createSelector(
    [getProducts],
    (products) =>
        products.reduce(product => product.unitsSold)
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

export const getProductionProcessProductivity = createSelector(
    [getAverageMachineTechnology,
     getRAndDIndex,
     getSystemsSecurityIndex,
     getProcessAutomationIndex,
     getTotalEngineerQualityOfWork],
     (averageMachineTechnology,
      rAndDIndex,
      systemsSecurityIndex,
      processAutomationIndex,
      totalEngineerQualityOfWork) => {
          const rAndDFactor = 0.8 + 0.1 * (rAndDIndex + 1)
          const systemsSecurityFactor = 0.8 + 0.1 * (systemsSecurityIndex + 1)
          const productionTechnologyFactor = 0.7 + 0.15 * averageMachineTechnology
          const processAutomationFactor = 0.8 + 0.1 * (processAutomationIndex + 1)
          const totalEngineerQualityOfWorkFactor = Math.sqrt(totalEngineerQualityOfWork * processAutomationFactor)/15
          return rAndDFactor * systemsSecurityFactor * processAutomationFactor * totalEngineerQualityOfWorkFactor * productionTechnologyFactor
      }
)
export const getProductQualities = createSelector(
    [getProcurementQualities, getProductionProcessProductivity],
    (procurementQualities, productionProcessProductivity) =>
        procurementQualities.map(procurementQuality =>
            procurementQuality * productionProcessProductivity)
)

/**********/
/* DEMAND */
/**********/

/* Product Appeal */

// Maximum procurement quality for our own products for each product type.
export const getMaximumProcurementQualityForProductTypes = createSelector(
    [getProducts,
    getProcurementQualities],
    (products, procurementQualities) => {
        return products.reduce((maxQualities, p, i) =>
                    maxQualities.map((currentMaxQuality, j) =>
                        j === p.productCategoryIndex && procurementQualities[i] > maxQualities[p.productCategoryIndex] ? procurementQualities[i] : currentMaxQuality
                    ),
                    [0,0,0,0] // new Array(PRODUCT_TEMPLATES.length).fill(0)
                )
        }
)

// Maximum total quality for our own products for each product type.
export const getMaximumTotalQualityForProductTypes = createSelector(
    [getMaximumProcurementQualityForProductTypes,
     getProductionProcessProductivity],
    (maximumProcurementQualityForProductTypes,
     productionProcessProductivity) => {
        return maximumProcurementQualityForProductTypes.map(procurementQuality => {
            return procurementQuality * productionProcessProductivity
        })
    }
)

// Maximum market quality for each product type. We assume competitors use
// the current state-of-the-art components on the market. Thus, the sum of
// the baseUtilities for each component is used here.
// We can outcompete the competitors by choosing the best components as well
// and bring the production productivity to > 1 by investing in R&D, process
// automation or having high-skilled and satisfied engineers.
// We can multiply this value by some constant < 1 to decrease
// and > 1 to increase the game difficulty.
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

// The maximum proxy quality. If we have released a better product than the
// current competitor proxy has now before, we will choose the highest of value
// of our products for this particular product type.
// This is necessary so we can't release the same product with the same utility
// over and over again and have the same demand for it, i.e. our products are
// also competing with themselves.
export const getMaximumProxyQualityForProductTypes = createSelector(
    [getMaximumMarketQualityForProductTypes,
     getMaximumTotalQualityForProductTypes,
     getProducts
    ],
    (maximumMarketQualityForProductTypes, maximumTotalQualityForProductTypes, products) =>
        maximumMarketQualityForProductTypes.map((marketQuality, i) => Math.max(marketQuality, maximumTotalQualityForProductTypes[i]))
)

export const getProductAppeals = createSelector(
    [getProductQualities,
     getProducts,
     getMaximumProxyQualityForProductTypes],
    (productQualities, products, maximumProxyQualityForProductTypes) =>
        productQualities.map((quality, i) => {
            return quality/maximumProxyQualityForProductTypes[products[i].productCategoryIndex]
        })
)

/* Price Appeal */

export const getPriceAppeals = createSelector(
    [getProducts],
    (products) =>
        products.map(product => {
            return product.basePrice/product.price
        })
)

/* Overall Appeal */

export const getOverallAppeals = createSelector(
    [getProductAppeals, getPriceAppeals],
    (productAppeals, priceAppeals) =>
        productAppeals.map((productAppeal, i) =>
            productAppeal * priceAppeals[i]
        )
)

/* Demand */

export const getDemandTotalPercentages = createSelector(
    [getOverallAppeals],
    (overallAppeals) =>
        overallAppeals.map(overallAppeal => {
            return Math.tanh(overallAppeal/2)
        }
    )
)

export const getDemandPeriodicPercentages = createSelector(
    [getProducts, getDemandTotalPercentages, getElapsedDays],
    (products, demandTotalPercentages, elapsedDays) =>
        products.map((product, i) => {
            const daysSinceProductLaunch = elapsedDays - product.buyDay
            return demandTotalPercentages[i] * (0.002 * (-0.5 * Math.tanh(0.01 * daysSinceProductLaunch - 3) + 0.5))
        })
)

const populationSize = 1000000

export const getDemandPeriodicAmounts = createSelector(
    [getDemandPeriodicPercentages],
    (demandPeriodicPercentages) =>
        demandPeriodicPercentages.map(percentage => parseInt(percentage * populationSize))
)

/* Revenue */
export const getTotalSalesRevenue = createSelector(
    [getDemandPeriodicAmounts, getProductPrices],
    (periodicAmounts, prices) => {
        //console.log("Now");
        //console.log(periodicAmounts);
        //console.log(prices);
        return periodicAmounts.reduce((totalSalesRevenue, amount, i) => totalSalesRevenue + amount * prices[i], 0)
    }
)
