import React from 'react'

const FinanceTable = ({ financialHistory }) => (
    <div className="half">
        <h2><i className="fas fa-exchange-alt"></i>Cashflow</h2>
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>Q1</th>
                    <th>Q2</th>
                    <th>Q3</th>
                    <th>Q4</th>
                </tr>
            </thead>
        </table>
        <hr />

        <table id="earnings">
            <tbody>
                <tr>
                    <td><b>Sales</b></td>
                    {financialHistory.map(entry => <td>${entry.sales}</td>)}
                </tr>
                <tr>
                    <td><b>Investments</b></td>
                    {financialHistory.map(entry => <td>${entry.investments}</td>)}
                </tr>
                <tr>
                    <td><b>Loans</b></td>
                    {financialHistory.map(entry => <td>${entry.loans}</td>)}
                </tr>
            </tbody>
        </table>
        <hr />
        <table id="expenses">
            <tbody>
                <tr>
                    <td><b>Material</b></td>
                    {financialHistory.map(entry => <td>${entry.materialCosts}</td>)}
                </tr>
                <tr>
                    <td><b>Salaries</b></td>
                    {financialHistory.map(entry => <td>${entry.salaries}</td>)}
                </tr>
                <tr>
                    <td><b>Loan interest</b></td>
                    {financialHistory.map(entry => <td>${entry.loanInterests}</td>)}
                </tr>
            </tbody>
        </table>
        <hr />
        <table>
            <tbody>
                <tr>
                    <td><b>Profit</b></td>
                    {financialHistory.map(entry => <td>${entry.sales + entry.investments + entry.loans - entry.materialCosts - entry.salaries - entry.loanInterests}</td>)}
                </tr>
            </tbody>
        </table>
    </div>
)

export default FinanceTable
