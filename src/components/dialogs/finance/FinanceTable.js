import React from 'react'
import {dollarString, quarterStrings} from '../../../util/Misc'
import * as classNames from 'classnames'

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
            <table className="earnings">
                <tbody>
                    <tr>
                        <td><b>Sales</b></td>
                        {financialHistory.map(entry => <td>{dollarString(entry.sales)}</td>)}
                    </tr>
                    <tr>
                        <td><b>Loans</b></td>
                        {financialHistory.map(entry => <td>{dollarString(entry.loans)}</td>)}
                    </tr>
                </tbody>
            </table>
            <hr />
            <table className="expenses">
                <tbody>
                    <tr>
                        <td><b>Salaries</b></td>
                        {financialHistory.map(entry => <td>{dollarString(entry.salaries)}</td>)}
                    </tr>
                    <tr>
                        <td><b>Material</b></td>
                        {financialHistory.map(entry => <td>{dollarString(entry.materialCosts)}</td>)}
                    </tr>
                    <tr>
                        <td><b>Logistics</b></td>
                        {financialHistory.map(entry => <td>{dollarString(entry.logisticsCosts)}</td>)}
                    </tr>
                    <tr>
                        <td><b>Warehousing</b></td>
                        {financialHistory.map(entry => <td>{dollarString(entry.warehousingCosts)}</td>)}
                    </tr>
                    <tr>
                        <td><b>Loan Payment</b></td>
                        {financialHistory.map(entry => <td>{dollarString(entry.loanInterests)}</td>)}
                    </tr>
                </tbody>
            </table>
            <hr />
            <table>
                <tbody>
                    <tr>
                        <td><b>EBIT</b></td>
                        {financialHistory.map(entry => <td>{dollarString(entry.ebit)}</td>)}
                    </tr>
                </tbody>
            </table>
            <hr />
            <table className="expenses">
                <tbody>
                    <tr>
                        <td><b>Taxes</b></td>
                        {financialHistory.map(entry => <td>{dollarString(-entry.taxes)}</td>)}
                    </tr>
                </tbody>
            </table>
            <hr />
            <table>
                <tbody>
                    <tr>
                        <td><b>Investments</b></td>
                        {financialHistory.map(entry => <td className={classNames({ 'earning': entry.totalInvestmentEarnings > 0, 'expense': entry.totalInvestmentEarnings < 0})}>{dollarString(entry.totalInvestmentEarnings)}</td>)}
                    </tr>
                </tbody>
            </table>
            <hr />
            <table>
                <tbody>
                    <tr>
                        <td><b>Profit</b></td>
                        {financialHistory.map(entry => <td>{dollarString(entry.profit)}</td>)}
                    </tr>
                </tbody>
            </table>
        </div>
    )}
}

export default FinanceTable
