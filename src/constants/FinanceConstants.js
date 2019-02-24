import * as uuid from 'uuid/v4'

const historyLength = 4

const historyTemplate = {
    materialCosts: 0,
    warehousingCosts: 0,
    logisticsCosts: 0,
    salaries: 0,
    loanInterests: 0,
    sales: 0,
    totalInvestmentEarnings: 0,
    totalInvestmentAmount: 0,
    loans: 0,
    cash: 0,
    netWorth: 50000,
    ebit: 0,
    profit: 0,
    taxes: 0,
}

export const FINANCIALS = {
    cash: 0,
    assets: 0,
    liabilities: 0,
    history: new Array(historyLength).fill(historyTemplate)
}

const INVESTMENT_REALESTATE = {
    name: "Real Estate Fund",
    expectedYearlyReturn: 0.06,
    standardDeviation: 0.1,
}

const INVESTMENT_STOCKS = {
    name: "Stocks (Index Fund)",
    expectedYearlyReturn: 0.08,
    standardDeviation: 0.2,
}

const INVESTMENT_VENTURECAPITAL = {
    name: "Venture Capital Fund",
    expectedYearlyReturn: 0.1,
    standardDeviation: 0.3,
}

export const INVESTMENTS = [
    INVESTMENT_REALESTATE, INVESTMENT_STOCKS, INVESTMENT_VENTURECAPITAL
].map(investment => ({...investment, amount: 0, uuid: uuid() }))
