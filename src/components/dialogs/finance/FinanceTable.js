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
                    {financialHistory.sales.map(salesEntry => <td>${salesEntry}</td>)}
                </tr>
                <tr>
                    <td><b>Investments</b></td>
                    {financialHistory.investments.map(investmentEntry => <td>${investmentEntry}</td>)}
                </tr>
                <tr>
                    <td><b>Loans</b></td>
                    {financialHistory.loans.map(loanEntry => <td>${loanEntry}</td>)}
                </tr>
            </tbody>
        </table>
        <hr />
        <table id="expenses">
            <tbody>
                <tr>
                    <td><b>Material</b></td>
                    {financialHistory.materialCosts.map(materialCostEntry => <td>${materialCostEntry}</td>)}
                </tr>
                <tr>
                    <td><b>Salaries</b></td>
                    {financialHistory.salaries.map(salaryEntry => <td>${salaryEntry}</td>)}
                </tr>
                <tr>
                    <td><b>Loan interest</b></td>
                    {financialHistory.loanInterests.map(loanInterestEntry => <td>${loanInterestEntry}</td>)}
                </tr>
            </tbody>
        </table>
        <hr />
        <table>
            <tbody>
                <tr>
                    <td><b>Total</b></td>
                    <td>$350,000</td>
                    <td>$400,000</td>
                    <td>$500,000</td>
                    <td>$500,000</td>
                </tr>
            </tbody>
        </table>
    </div>
)

export default FinanceTable
