import * as uuid from 'uuid/v4'
import { deepCopyWithUUID } from '../util/Misc'

const historyLength = 4

const historyTemplate = {
    totalMaterialCosts: 0,
    totalWarehousingCosts: 0,
    totalLogisticsCosts: 0,
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
    history: new Array(historyLength).fill(deepCopyWithUUID(historyTemplate))
}

const INVESTMENT_REALESTATE = {
    name: "Real Estate Fund",
    expectedDailyReturn: 0.0001596535875, // = (1.06/1)^(1/365) - 1
    standardDeviation: 0.01046847845, // = 0.2/sqrt(365)
}

const INVESTMENT_STOCKS = {
    name: "Stocks (Index Fund)",
    expectedDailyReturn: 0.0002108743984, // = (1.08/1)^(1/365) - 1
    standardDeviation: 0.01570271768, // 0.3/sqrt(365)
}

const INVESTMENT_VENTURECAPITAL = {
    name: "Venture Capital Fund",
    expectedDailyReturn: 0.0002611578761, // = (1.1/1)^(1/365) - 1
    standardDeviation: 0.02617119613, // 0.5/sqrt(365)
}

export const INVESTMENTS = [
    INVESTMENT_REALESTATE, INVESTMENT_STOCKS, INVESTMENT_VENTURECAPITAL
].map(investment => ({...investment, amount: 0, uuid: uuid() }))
