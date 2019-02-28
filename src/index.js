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
import { getProcurementQualities,
         getMaximumProxyQualityForProductTypes,
         getMaximumMarketQualityForProductTypes,
         getMaximumTotalQualityForProductTypes,
         getProductionProcessProductivity,
         getDemandTotalPercentages,
         getDemandPeriodicPercentages,
         getTotalSalesRevenue,
         getProductAppeals,
         getPriceAppeals,
         getOverallAppeals,
         getDemandPeriodicAmounts,
         getProductPrices,
         getTruckValues,
         getWarehouseValues,
         getMachineValues,
         getTotalTruckCosts,
         getTotalMachineCosts,
         getTotalWarehouseCosts,
         getAverageMachineTechnology,
         getProductComponentCosts } from './selectors/products'
import { getTotalSalespeopleQualityOfWork,
         getTotalEngineerQualityOfWork,
         getAllEmployees,
         getAllHiredEmployees,
         getTotalSalaries } from './selectors/employees'
import { dailyProductUpdate,
         dailyInvestmentsUpdate,
         dailyFinancialUpdate,
         dailyFinancialHistoryEntry,
         quarterlyFinancialHistoryEntry,
         monthlyComponentUpdate,
         monthlyHRHistoryEntry,
         purchase
} from './actions'

import {
    LOBBYIST_TEMPLATES
} from './constants/MarketingConstants'

import {
    INVESTMENTS
} from './constants/FinanceConstants'
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
        }, 3000)
    }
}

function simulate(dispatch) {
    const state = store.getState()

    // Selectors
    const employees = getAllEmployees(state)
    const hiredEmployees = getAllHiredEmployees(state)
    const productPrices = getProductPrices(state)
    const propertyAssets = getTruckValues(state) + getMachineValues(state) + getWarehouseValues(state)
    const totalLogisticsCosts = getTotalTruckCosts(state) + getTotalWarehouseCosts(state)

    console.log("=======")
    console.log("Demands")
    console.log("=======")

    /*console.log(getMaximumTotalQualityForProductTypes(state))
    console.log(getMaximumMarketQualityForProductTypes(state))
    console.log(getMaximumProxyQualityForProductTypes(state))
    console.log(getProductAppeals(state))
    console.log(getPriceAppeals(state))
    console.log(getOverallAppeals(state))
    console.log(getDemandTotalPercentages(state))*/
    //console.log(getDemandPeriodicPercentages(state))

    console.log(getTotalSalesRevenue(state));

    //const proxyQualities = getMaximumProxyQualityForProductTypes(state)


    // Variables from state which can be asychnronously changed by the user
    const taxRate = state.marketing.lobbyistIndex !== null ? LOBBYIST_TEMPLATES[state.marketing.lobbyistIndex].taxRate : 0.3

    // Production
    const rAndDFactor = 0.8 + 0.1 * (state.rAndDIndex + 1)
    const systemsSecurityFactor = 0.8 + 0.1 * (state.systemsSecurityIndex + 1)
    const processAutomationFactor = 0.8 + 0.1 * (state.processAutomationIndex + 1)
    const productionTechnologyFactor = 0.5 + 0.25 * getAverageMachineTechnology(state)
    //const maximumProcurementQualityForProductTypes = getMaximumProcurementQualityForProductTypes(state)


    // Reducers
    const reducedValues = {
        totalSalaries: parseInt(getTotalSalaries(state)/365),
        totalEngineerQualityOfWork: getTotalEngineerQualityOfWork(state),
        totalSalespeopleQualityOfWork: getTotalSalespeopleQualityOfWork(state),
        productComponentCosts: getProductComponentCosts(state),
        totalLogisticsCosts: totalLogisticsCosts,
        totalMachineCosts: getTotalMachineCosts(state),
        demandPeriodicAmounts: getDemandPeriodicAmounts(state),
        totalLobbyistCosts: LOBBYIST_TEMPLATES[state.marketing.lobbyistIndex].costPerMonth,
        totalMarketingCosts: 0,
        propertyAssets: propertyAssets,
        taxRate: taxRate,
        prices: productPrices,
        cash: state.financials.cash || 50000,
        investments: state.investments || INVESTMENTS,
        manufacturingMultiplicator: rAndDFactor * processAutomationFactor * systemsSecurityFactor * productionTechnologyFactor
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

        const financials = {//...state.financials,
            totalSalesRevenue: getTotalSalesRevenue(state),
            totalInvestmentAmount: simulationGraph.getVertexValue("totalInvestmentAmount"),
            totalInvestmentEarnings: simulationGraph.getVertexValue("totalInvestmentEarnings"),
            totalLogisticsCosts: simulationGraph.getVertexValue("totalLogisticsCosts"),
            totalMaterialCosts: simulationGraph.getVertexValue("totalProductComponentCost"),
            totalMachineCosts: simulationGraph.getVertexValue("totalMachineCosts"),
            totalLobbyistCosts: simulationGraph.getVertexValue("totalLobbyistCosts"),
            totalMarketingCosts: simulationGraph.getVertexValue("totalMarketingCosts"),
            salaries: simulationGraph.getVertexValue("totalSalaries"),
            loans: simulationGraph.getVertexValue("loans"),
            loanInterests: simulationGraph.getVertexValue("loanInterests"),
            ebit: simulationGraph.getVertexValue("ebit"),
            taxRate: simulationGraph.getVertexValue("taxRate"),
            taxes: simulationGraph.getVertexValue("taxes"),
            profit: simulationGraph.getVertexValue("profit"),
            cash: simulationGraph.getVertexValue("cash"),
            netWorth: simulationGraph.getVertexValue("netWorth"),
            assets: simulationGraph.getVertexValue("assets"),
            liabilities: 0
        }

        console.log("Sales");
        console.log(getTotalSalesRevenue(state));

        const humanResourcesHistoryEntry = {
            numberOfEmployees: employees.length,
            jobSatisfactionPercentages: jobSatisfactionPercentages
        }


        const salesFigures = simulationGraph.getVertexValue("demandPeriodicAmounts")
        const investmentEarnings = simulationGraph.getVertexValue("investmentEarnings")

        const elapsedDays = state.simulationState.elapsedDays
        const startDate = new Date(1990, 0, 1)
        const currentDate = addDays(startDate, elapsedDays)
        const elapsedMonths = getMonthsBetween(startDate, currentDate, false)

        // Daily updates
        dispatch(dailyProductUpdate(salesFigures))
        dispatch(dailyInvestmentsUpdate(investmentEarnings))
        dispatch(dailyFinancialUpdate(financials))
        dispatch(dailyFinancialHistoryEntry(financials))

        // Monthly updates
        if (currentDate.getDate() === 1) {
            dispatch(monthlyComponentUpdate(elapsedMonths))
            dispatch(monthlyHRHistoryEntry(humanResourcesHistoryEntry, jobSatisfactionScore))
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
