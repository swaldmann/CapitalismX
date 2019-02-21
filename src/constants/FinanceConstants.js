const historyLength = 4

const historyTemplate = {
    //elapsedDaysSinceFirstDayOfMonth: 0,
    materialCosts: 0,
    salaries: 0,
    loanInterests: 0,
    sales: 0,
    investmentEarnings: 0,
    investmentAmount: 0,
    loans: 0,
    cash: 0,
    netWorth: 25000,
    ebit: 0,
    profit: 0,
    taxes: 0
}

export const FINANCIALS = {
    cash: 0,
    assets: 0,
    liabilities: 0,
    history: new Array(historyLength).fill(historyTemplate)
}
