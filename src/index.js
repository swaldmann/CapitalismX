import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware/*,compose*/ } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { addDays, getMonthsBetween } from './util/Misc'
import { loadState, saveState } from './util/Persistence'
import throttle from 'lodash/throttle'
import rootReducer from './reducers'
import SimulationGraph from './models/SimulationGraph'
import { getTotalSalesRevenue,
         getActualSalesFigures,
         getTotalProductComponentCosts,
         getTruckValues,
         getWarehouseValues,
         getMachineValues,
         getUsedMachineCapacities,
         getTotalTruckCosts,
         getTotalMachineCosts,
         getTotalWarehouseCosts,
         getMaximumTotalQualityForProductTypes,
         getMaximumMarketQualityForProductTypes,
         getMaximumProxyQualityForProductTypes,
         getProductAppeals,
         getPriceAppeals,
         getOverallAppeals,
         getDemandTotalPercentages,
         getDemandPeriodicPercentages
} from './selectors/products'
import { getAllHiredEmployees,
         getTotalSalaries
} from './selectors/employees'
import { dailyProductUpdate,
         dailyInvestmentsUpdate,
         dailyFinancialUpdate,
         dailyFinancialHistoryEntry,
         dailyMachineCapacityUpdate,
         quarterlyFinancialHistoryEntry,
         monthlyComponentUpdate,
         monthlyHRHistoryEntry
} from './actions'

import {
    LOBBYIST_TEMPLATES
} from './constants/MarketingConstants'

import {
    WORKING_TIME_MODEL_TEMPLATES,
    WORKING_HOUR_TEMPLATES,
    COMPANY_CAR_TEMPLATES,
    IT_EQUIPMENT_TEMPLATES,
    FOOD_BENEFITS_TEMPLATES,
    GYM_MEMBERSHIP_TEMPLATES
} from './constants/HRConstants'

var simulationGraph

const persistedState = loadState()
export const store = createStore(
    rootReducer,
    persistedState,
    applyMiddleware(thunk)
    // Change to this if you want to use the Redux Devtools extension in Chrome.
    /*compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )*/
)

store.subscribe(throttle(() => {
    saveState(store.getState())
}, 1000))

function startSimulation() {
    simulationGraph = new SimulationGraph()

    return (dispatch) => {
        simulate(dispatch)
        setInterval(function() {
            simulate(dispatch)
        }, 1000)
    }
}

function simulate(dispatch) {
    const state = store.getState()

    // Selectors
    const hiredEmployees = getAllHiredEmployees(state)
    const propertyAssets = getTruckValues(state) + getMachineValues(state) + getWarehouseValues(state)
    const totalLogisticsCosts = getTotalTruckCosts(state) + getTotalWarehouseCosts(state)

    console.log("=======")
    console.log("Demand")
    console.log("=======")

    console.log("Maximum total quality for product types")
    console.log(getMaximumTotalQualityForProductTypes(state))
    console.log("Maximum market quality for product types")
    console.log(getMaximumMarketQualityForProductTypes(state))
    console.log("Maximum proxy quality for product types")
    console.log(getMaximumProxyQualityForProductTypes(state))
    console.log("Product Appeals")
    console.log(getProductAppeals(state))
    console.log("Price Appeals")
    console.log(getPriceAppeals(state))
    console.log("Overall Appeals");
    console.log(getOverallAppeals(state))
    console.log("Demand percentage");
    console.log(getDemandTotalPercentages(state))
    console.log("Demand periodic percentages");
    //console.log(getDemandPeriodicPercentages(state))

    // Variables from state which can be asychnronously changed by the user
    const taxRate = LOBBYIST_TEMPLATES[state.marketing.lobbyistIndex].taxRate

    // Reducers
    const reducedValues = {
        totalSalaries: parseInt(getTotalSalaries(state)/365),
        totalLogisticsCosts: totalLogisticsCosts,
        totalMachineCosts: getTotalMachineCosts(state),
        totalProductComponentCost: getTotalProductComponentCosts(state),
        totalLobbyistCosts: LOBBYIST_TEMPLATES[state.marketing.lobbyistIndex].costPerMonth/30,
        totalMarketingCosts: 0,
        propertyAssets: propertyAssets,
        taxRate: taxRate,
        totalSalesRevenue: getTotalSalesRevenue(state),
        cash: state.financials.cash || 1000000,
        investments: state.investments
    }

    simulationGraph.updateVertices(reducedValues)
    simulationGraph.forwardTime()

    /* HR */

    // Happiness Categorization
    // Gets the percentages for happy, partially happy, and unhappy.
    var jobSatisfactionCountArray = [0,0,0]
    hiredEmployees.forEach(employee => {
        return jobSatisfactionCountArray[employee.happiness]++
    })
    const jobSatisfactionPercentages = hiredEmployees.length === 0 ? [0,0,0] : jobSatisfactionCountArray.map(happinessEntry => happinessEntry/hiredEmployees.length)
    const workingTimeModel = WORKING_TIME_MODEL_TEMPLATES[state.workingTimeModelIndex]
    const workingHours = WORKING_HOUR_TEMPLATES[state.workingHoursIndex]
    const companyCarPolicy = COMPANY_CAR_TEMPLATES[state.companyCarPolicyIndex]
    const itEquipmentPolicy = IT_EQUIPMENT_TEMPLATES[state.itEquipmentPolicyIndex]
    const foodBenefits = FOOD_BENEFITS_TEMPLATES[state.foodBenefitsIndex]
    const gymMembership = GYM_MEMBERSHIP_TEMPLATES[state.gymMembershipIndex]
    const jobSatisfactionScore = [workingTimeModel, workingHours, companyCarPolicy, itEquipmentPolicy, foodBenefits, gymMembership].reduce((count, jobSatisfactionInfluence) =>
        count + jobSatisfactionInfluence.jobSatisfactionPoints,
        0
    )

    if (state.simulationState.isPlaying) {
        dispatch({ type: 'START_SIMULATION' })

        const financials = {
            totalAssetsSold: 0,
            totalAssetsBought: 0,
            totalDepreciation: 0,
            totalSalesRevenue: getTotalSalesRevenue(state),
            totalLogisticsCosts: reducedValues.totalLogisticsCosts,
            totalMaterialCosts: reducedValues.totalProductComponentCost,
            totalMachineCosts: reducedValues.totalMachineCosts,
            totalLobbyistCosts: reducedValues.totalLobbyistCosts,
            totalMarketingCosts: reducedValues.totalMarketingCosts,
            salaries: reducedValues.totalSalaries,
            loans: 0,
            loanInterests: 0,
            taxRate: taxRate,
            totalInvestmentAmount: simulationGraph.getVertexValue("totalInvestmentAmount"),
            totalInvestmentEarnings: simulationGraph.getVertexValue("totalInvestmentEarnings"),
            ebit: simulationGraph.getVertexValue("ebit"),
            taxes: simulationGraph.getVertexValue("taxes"),
            profit: simulationGraph.getVertexValue("profit"), // Rename to nopat
            cash: simulationGraph.getVertexValue("cash"),
            netWorth: simulationGraph.getVertexValue("netWorth"),
            assets: simulationGraph.getVertexValue("assets"),
            liabilities: 0
        }

        const humanResourcesHistoryEntry = {
            numberOfEmployees: hiredEmployees.length,
            jobSatisfactionPercentages: jobSatisfactionPercentages
        }

        const salesFigures = getActualSalesFigures(state)
        const investmentEarnings = simulationGraph.getVertexValue("investmentEarnings")
        const usedMachineCapacities = getUsedMachineCapacities(state)

        const elapsedDays = state.simulationState.elapsedDays
        const startDate = new Date(1990, 0, 1)
        const currentDate = addDays(startDate, elapsedDays)
        const elapsedMonths = getMonthsBetween(startDate, currentDate, false)

        /* History entries */

        // Daily updates
        dispatch(dailyProductUpdate(salesFigures))
        dispatch(dailyInvestmentsUpdate(investmentEarnings))
        dispatch(dailyFinancialUpdate(financials))
        dispatch(dailyFinancialHistoryEntry(financials))
        dispatch(dailyMachineCapacityUpdate(usedMachineCapacities))
        dispatch(monthlyHRHistoryEntry(humanResourcesHistoryEntry, jobSatisfactionScore))

        // Monthly updates
        if (currentDate.getDate() === 1) {
            dispatch(monthlyComponentUpdate(elapsedMonths))
        }

        // Quarterly updates
        if (currentDate.getMonth() % 3 === 0 && currentDate.getDate() === 1) {
            dispatch(quarterlyFinancialHistoryEntry(financials))
        }
    }
}

store.dispatch(startSimulation())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

registerServiceWorker()
