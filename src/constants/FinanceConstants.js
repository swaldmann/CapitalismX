const historyLength = 4

export const FINANCIALS = {
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
}
