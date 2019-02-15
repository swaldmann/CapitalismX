const historyLength = 4

const historyTemplate = {
    elapsedDaysSinceFirstDayOfMonth: 0,
    materialCosts: 0,
    salaries: 0,
    loanInterests: 0,
    sales: 0,
    investments: 0,
    loans: 0
}

export const FINANCIALS = {
    cash: 0,
    assets: 0,
    liabilities: 0,
    history: new Array(historyLength).fill(historyTemplate)
}

// Column-based approach
/*export const FINANCIALS = {
    assets: 0,
    cash: 0,
    history: {
        elapsedDaysSinceFirstDayOfMonth: 0,
        materialCosts: new Array(historyLength).fill(0),
        salaries: new Array(historyLength).fill(0),
        loanInterests: new Array(historyLength).fill(0),
        sales: new Array(historyLength).fill(0),
        investments: new Array(historyLength).fill(0),
        loans: new Array(historyLength).fill(0)
    }
}*/
