import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import rootReducer from './reducers'
import { getProductUtilities, getProductPrices, getProductComponentCosts } from './selectors/products'
import { getAllEngineers, getAllSalespeople, getAllEmployees, getAllHiredEmployees } from './selectors/employees'
import { dailyProductUpdate, dailyFinancialUpdate, quarterlyFinancialHistoryEntry, monthlyHRHistoryEntry } from './actions'
import SimulationGraph from './models/SimulationGraph'
import { LOBBYIST_TEMPLATES } from './constants/MarketingConstants'

var simulationGraph

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
    // Change to this if you want to use the Redux Devtools extension in Chrome.
    /*compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )*/
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
    const engineers = getAllEngineers(state)
    const salespeople = getAllSalespeople(state)
    const productUtilities = getProductUtilities(state)
    const productPrices = getProductPrices(state)
    const productComponentCosts = getProductComponentCosts(state)

    // Reducers
    const reducedValues = {
        totalSalaries: employees.reduce((totalSalaries, employee) => employee.isEmployed ? totalSalaries + employee.salary : totalSalaries, 0)/365,
        averageEmployeeSatisfaction: employees.reduce((totalEmployeeSatisfaction, employee) => employee.isEmployed ? totalEmployeeSatisfaction + employee.happiness : totalEmployeeSatisfaction, 0)/employees.length,
        totalEngineerSkills: engineers.reduce((totalEngineerSkills, engineer) => engineer.isEmployed ? totalEngineerSkills + engineer.skill : totalEngineerSkills, 0),
        averageEngineerSatisfaction: engineers.reduce((totalEngineerSatisfaction, engineer) => engineer.isEmployed ? totalEngineerSatisfaction + engineer.happiness : totalEngineerSatisfaction, 0)/engineers.length,
        totalSalespeopleSkills: salespeople.reduce((totalSalespeopleSkills, salesperson) => salesperson.isEmployed ? totalSalespeopleSkills + salesperson.skill : totalSalespeopleSkills, 0),
        averageSalespeopleSatisfaction: salespeople.reduce((totalSalespeopleSatisfaction, salesperson) => salesperson.isEmployed ? totalSalespeopleSatisfaction + salesperson.happiness : totalSalespeopleSatisfaction, 0)/salespeople.length,
        totalProductComponentCosts: productComponentCosts,
        taxRate: state.marketing.lobbyistIndex !== null ? LOBBYIST_TEMPLATES[state.marketing.lobbyistIndex].taxRate : 0.3,
        productUtilities: productUtilities,
        prices: productPrices,
        cash: state.financials.cash
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

    console.log(simulationGraph.getVertexValue("totalProductComponentCost"))

    if (state.simulationState.isPlaying) {
        dispatch({ type: 'START_SIMULATION' })

        const financials = { ...state.financials,
            sales: simulationGraph.getVertexValue("revenue"),
            investmentAmount: simulationGraph.getVertexValue("investmentAmount"),
            investmentEarnings: simulationGraph.getVertexValue("investmentEarnings"),
            loans: simulationGraph.getVertexValue("loans"),
            salaries: simulationGraph.getVertexValue("totalSalaries"),
            materialCosts: simulationGraph.getVertexValue("totalProductComponentCost"),
            loanInterests: simulationGraph.getVertexValue("loanInterests"),
            ebit: simulationGraph.getVertexValue("ebit"),
            taxRate: simulationGraph.getVertexValue("taxRate"),
            taxes: simulationGraph.getVertexValue("taxes"),
            profit: simulationGraph.getVertexValue("profit"),
              cash: simulationGraph.getVertexValue("cash"),
            netWorth: simulationGraph.getVertexValue("netWorth")
        }

        const humanResourcesHistoryEntry = {
            numberOfEmployees: employees.length,
            jobSatisfactionPercentages: jobSatisfactionPercentages
        }

        const salesFigures = simulationGraph.getVertexValue("salesFigures")

        dispatch(dailyProductUpdate(salesFigures))
        dispatch(dailyFinancialUpdate(financials))
        dispatch(quarterlyFinancialHistoryEntry(financials))
        dispatch(monthlyHRHistoryEntry(humanResourcesHistoryEntry, jobSatisfactionScore))

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
