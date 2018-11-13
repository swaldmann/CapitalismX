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
        <table id="expenses">
            <tbody>
                <tr>
                    <td><b>Material</b></td>
                    <td>$3,500</td>
                    <td>$4,000</td>
                    <td>$5,000</td>
                    <td>$5,000</td>
                </tr>
                <tr>
                    <td><b>Salaries</b></td>
                    <td>${financialHistory.salaries[3] || 0}</td>
                    <td>${financialHistory.salaries[2] || 0}</td>
                    <td>${financialHistory.salaries[1] || 0}</td>
                    <td>${financialHistory.salaries[0] || 0}</td>
                </tr>
                <tr>
                    <td><b>Loan interest</b></td>
                    <td>$3,000</td>
                    <td>$5,000</td>
                    <td>$5,000</td>
                    <td>$5,000</td>
                </tr>
            </tbody>
        </table>
        <hr />
        <table id="earnings">
            <tbody>
                <tr>
                    <td><b>Sales</b></td>
                    <td>$350,000</td>
                    <td>$400,000</td>
                    <td>$500,000</td>
                    <td>$500,000</td>
                </tr>
                <tr>
                    <td><b>Investments</b></td>
                    <td>$150,000</td>
                    <td>$100,000</td>
                    <td>$130,000</td>
                    <td>$130,000</td>
                </tr>
                <tr>
                    <td><b>Loans</b></td>
                    <td>$100,000</td>
                    <td>$0</td>
                    <td>$0</td>
                    <td>$0</td>
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
