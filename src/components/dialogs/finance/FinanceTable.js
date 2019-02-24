import React from 'react'
import {quarterStrings} from '../../../util/Misc'

class FinanceTable extends React.Component {
    render() {
        const { financialHistory, simulationState } = this.props
        return (
        <div className="half">
            <h3>Cashflow</h3>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        {[...Array(4).keys()].map(i => <th>{quarterStrings(simulationState.elapsedDays)[i]}</th>)}
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
                        <td><b>Loan Payment</b></td>
                        {financialHistory.map(entry => <td>${entry.loanInterests.toFixed(0)}</td>)}
                    </tr>
                </tbody>
            </table>
            <hr />
            <table>
                <tbody>
                    <tr>
                        <td><b>EBIT</b></td>
                        {financialHistory.map(entry => <td>${(entry.ebit).toFixed(0)}</td>)}
                    </tr>
                </tbody>
            </table>
            <hr />
            <table>
                <tbody>
                    <tr>
                        <td><b>Investments</b></td>
                        {console.log(financialHistory)}
                        {financialHistory.map(entry => <td>${entry.totalInvestmentEarnings.toFixed(0)}</td>)}
                    </tr>
                </tbody>
            </table>
            <hr />
            <table>
                <tbody>
                    <tr>
                        <td><b>Taxes</b></td>
                        {financialHistory.map(entry => <td>${entry.taxes.toFixed(0)}</td>)}
                    </tr>
                </tbody>
            </table>
            <hr />
            <table>
                <tbody>
                    <tr>
                        <td><b>Profit</b></td>
                        {financialHistory.map(entry => <td>${entry.profit.toFixed(0)}</td>)}
                    </tr>
                </tbody>
            </table>
        </div>
    )}
}

export default FinanceTable
