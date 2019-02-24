import { createSelector } from 'reselect'

const getInvestments = state => state.investments

export const getInvestmentAmounts = createSelector(
    [getInvestments],
    function(investments) {
        return investments.reduce((totalAmount, investment) => totalAmount + investment.amount, 0)
    }
)
