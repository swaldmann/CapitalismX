import React from 'react'

const FinanceTable = ({ financialHistory, simulationState }) => (
    <div className="half">
        <h2><i className="fas fa-exchange-alt"></i>Cashflow</h2>
        <table>
            <thead>
                <tr>
                    <th></th>
                    {[...Array(4).keys()].map(i => <th>Q{((simulationState.elapsedDays - 4 + i)%4 + 4)%4 + 1}/{parseInt((simulationState.elapsedDays - 4 + i)/4 + 90)%100}</th>)}
                </tr>
            </thead>
        </table>
        <hr />

        <table id="earnings">
            <tbody>
                <tr>
                    <td><b>Sales</b></td>
                    {financialHistory.map(entry => <td>${entry.sales.toFixed(0)}</td>)}
                </tr>
                <tr>
                    <td><b>Investments</b></td>
                    {financialHistory.map(entry => <td>${entry.investmentEarnings.toFixed(0)}</td>)}
                </tr>
                <tr>
                    <td><b>Loans</b></td>
                    {financialHistory.map(entry => <td>${entry.loans.toFixed(0)}</td>)}
                </tr>
            </tbody>
        </table>
        <hr />
        <table id="expenses">
            <tbody>
                <tr>
                    <td><b>Material</b></td>
                    {financialHistory.map(entry => <td>${entry.materialCosts.toFixed(0)}</td>)}
                </tr>
                <tr>
                    <td><b>Salaries</b></td>
                    {financialHistory.map(entry => <td>${entry.salaries.toFixed(0)}</td>)}
                </tr>
                <tr>
                    <td><b>Loan interest</b></td>
                    {financialHistory.map(entry => <td>${entry.loanInterests.toFixed(0)}</td>)}
                </tr>
            </tbody>
        </table>
        <hr />
        <table>
            <tbody>
                <tr>
                    <td><b>Profit</b></td>
                    {financialHistory.map(entry => <td>${(entry.sales + entry.investmentEarnings + entry.loans - entry.materialCosts - entry.salaries - entry.loanInterests).toFixed(0)}</td>)}
                </tr>
            </tbody>
        </table>
    </div>
)

export default FinanceTable
