import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { addDays, getMonthsBetween } from './util/Misc'
import rootReducer from './reducers'
import { getProductUtilities,
         getProductPrices,
         getTruckValues,
         getWarehouseValues,
         getMachineValues,
         getTotalTruckCosts,
         getTotalMachineCosts,
         getTotalWarehouseCosts,
         getProductComponentCosts } from './selectors/products'
import { getTotalSalespeopleQualityOfWork,
         getTotalEngineerQualityOfWork,
         getAllEmployees,
         getAllHiredEmployees,
         getTotalSalaries } from './selectors/employees'
import { dailyProductUpdate,
         dailyInvestmentsUpdate,
         dailyFinancialUpdate,
         quarterlyFinancialHistoryEntry,
         monthlyComponentUpdate,
         monthlyHRHistoryEntry,
         purchase } from './actions'
import SimulationGraph from './models/SimulationGraph'
import { LOBBYIST_TEMPLATES } from './constants/MarketingConstants'
import { INVESTMENTS } from './constants/FinanceConstants'

var simulationGraph

export const store = createStore(
    rootReducer,
    //applyMiddleware(thunk),
    // Change to this if you want to use the Redux Devtools extension in Chrome.
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

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
    const productUtilities = getProductUtilities(state)
    const productPrices = getProductPrices(state)
    const propertyAssets = getTruckValues(state) + getMachineValues(state) + getWarehouseValues(state)
    const totalLogisticsCosts = getTotalTruckCosts(state) + getTotalWarehouseCosts(state)
    const taxRate = state.marketing.lobbyistIndex !== null ? LOBBYIST_TEMPLATES[state.marketing.lobbyistIndex].taxRate : 0.3
    //const elapsedDays = this.state.simulationState.elapsedDays

    // Reducers
    const reducedValues = {
        totalSalaries: getTotalSalaries(state)/365,
        totalEngineerQualityOfWork: getTotalEngineerQualityOfWork(state),
        totalSalespeopleQualityOfWork: getTotalSalespeopleQualityOfWork(state),
        productComponentCosts: getProductComponentCosts(state),
        totalLogisticsCosts: totalLogisticsCosts,
        propertyAssets: propertyAssets,
        taxRate: taxRate,
        productUtilities: productUtilities,
        prices: productPrices,
        cash: state.financials.cash || 50000,
        investments: state.investments || INVESTMENTS
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
    const jobSatisfactionScore = [state.workingTimeModel, state.workingHours, state.companyCarPolicy, state.foodBenefits, state.gymMembership].reduce((count, jobSatisfactionInfluence) =>
        count + jobSatisfactionInfluence.jobSatisfactionPoints,
        0
    )

    if (state.simulationState.isPlaying) {
        dispatch({ type: 'START_SIMULATION' })

        const financials = { ...state.financials,
            sales: simulationGraph.getVertexValue("totalSales"),
            totalInvestmentAmount: simulationGraph.getVertexValue("totalInvestmentAmount"),
            totalInvestmentEarnings: simulationGraph.getVertexValue("totalInvestmentEarnings"),
            totalLogisticsCosts: simulationGraph.getVertexValue("totalLogisticsCosts"),
            totalMaterialCosts: simulationGraph.getVertexValue("totalProductComponentCost"),
            totalMachineCosts: getTotalMachineCosts(state),
            totalLobbyistCosts: LOBBYIST_TEMPLATES[state.marketing.lobbyistIndex].costPerMonth,
            totalMarketingCosts: 0,
            salaries: simulationGraph.getVertexValue("totalSalaries"),
            loans: simulationGraph.getVertexValue("loans"),
            loanInterests: simulationGraph.getVertexValue("loanInterests"),
            ebit: simulationGraph.getVertexValue("ebit"),
            taxRate: simulationGraph.getVertexValue("taxRate"),
            taxes: simulationGraph.getVertexValue("taxes"),
            profit: simulationGraph.getVertexValue("profit"),
            cash: simulationGraph.getVertexValue("cash"),// - LOBBYIST_TEMPLATES[state.marketing.lobbyistIndex].costPerMonth
            netWorth: simulationGraph.getVertexValue("netWorth"),
            assets: simulationGraph.getVertexValue("assets")
        }

        const humanResourcesHistoryEntry = {
            numberOfEmployees: employees.length,
            jobSatisfactionPercentages: jobSatisfactionPercentages
        }

        const salesFigures = simulationGraph.getVertexValue("salesFigures")
        const investmentEarnings = simulationGraph.getVertexValue("investmentEarnings")

        const elapsedDays = state.simulationState.elapsedDays
        const startDate = new Date(1990, 0, 1)
        const currentDate = addDays(startDate, elapsedDays * 28)
        const monthDay = currentDate.getDay()
        const elapsedMonths = getMonthsBetween(startDate, currentDate, false)

        dispatch(dailyProductUpdate(salesFigures))
        //if (monthDay === 1) {
            dispatch(monthlyComponentUpdate(elapsedMonths))
        //}
        dispatch(dailyInvestmentsUpdate(investmentEarnings))
        dispatch(dailyFinancialUpdate(financials))
        dispatch(monthlyHRHistoryEntry(humanResourcesHistoryEntry, jobSatisfactionScore))
        dispatch(quarterlyFinancialHistoryEntry(financials))
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
