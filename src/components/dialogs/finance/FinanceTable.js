import React from 'react'
import * as uuid from 'uuid/v4'
import {dollarString, quarterStrings} from '../../../util/Misc'
import * as classNames from 'classnames'

class FinanceTable extends React.Component {
    render() {
        const { financialHistory, simulationState } = this.props

        // Get 5 last elements of history
        const history = financialHistory.slice(Math.max(financialHistory.length - 4, 1))

        return (
        <div className="half">
            <h3>Cashflow</h3>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        {[...Array(4).keys()].map(i => <th key={uuid()}>{quarterStrings(simulationState.elapsedDays)[i]}</th>)}
                    </tr>
                </thead>
            </table>
            <hr />
            <table className="earnings">
                <tbody>
                    <tr>
                        <td><b>Sales</b></td>
                        {history.map(entry => <td key={uuid()}>{dollarString(entry.sales)}</td>)}
                    </tr>
                    <tr>
                        <td><b>Sold Assets</b></td>
                        {history.map(entry => <td key={uuid()}>{dollarString(0)/*dollarString(entry.loans)*/}</td>)}
                    </tr>
                </tbody>
            </table>
            <hr />
            <table className="expenses">
                <tbody>
                    <tr>
                        <td><b>Salaries</b></td>
                        {history.map(entry => <td key={uuid()}>{dollarString(entry.salaries)}</td>)}
                    </tr>
                    <tr>
                        <td><b>Material</b></td>
                        {history.map(entry => <td key={uuid()}>{dollarString(entry.totalMaterialCosts)}</td>)}
                    </tr>
                    <tr>
                        <td><b>Machines</b></td>
                        {history.map(entry => <td key={uuid()}>{dollarString(entry.totalMachineCosts)}</td>)}
                    </tr>
                    <tr>
                        <td><b>Logistics</b></td>
                        {history.map(entry => <td key={uuid()}>{dollarString(entry.totalLogisticsCosts)}</td>)}
                    </tr>
                    <tr>
                        <td><b>Lobbyist</b></td>
                        {history.map(entry => <td key={uuid()}>{dollarString(entry.totalLobbyistCosts)}</td>)}
                    </tr>
                    <tr>
                        <td><b>Marketing</b></td>
                        {history.map(entry => <td key={uuid()}>{dollarString(entry.totalMarketingCosts)}</td>)}
                    </tr>
                    <tr>
                        <td><b>Loan Interest</b></td>
                        {history.map(entry => <td key={uuid()}>{dollarString(entry.loanInterests)}</td>)}
                    </tr>
                </tbody>
            </table>
            <hr />
            <table>
                <tbody>
                    <tr>
                        <td><b>EBIT</b></td>
                        {history.map(entry => <td key={uuid()}>{dollarString(entry.ebit)}</td>)}
                    </tr>
                </tbody>
            </table>
            <hr />
            <table className="expenses">
                <tbody>
                    <tr>
                        <td><b>Taxes</b></td>
                        {history.map(entry => <td key={uuid()}>{dollarString(-entry.taxes)}</td>)}
                    </tr>
                </tbody>
            </table>
            <hr />
            <table>
                <tbody>
                    <tr>
                        <td><b>Investments</b></td>
                        {history.map(entry => <td key={uuid()} className={classNames({ 'earning': entry.totalInvestmentEarnings > 0, 'expense': entry.totalInvestmentEarnings < 0})}>{dollarString(entry.totalInvestmentEarnings)}</td>)}
                    </tr>
                </tbody>
            </table>
            <hr />
            <table>
                <tbody>
                    <tr>
                        <td><b>NOPAT</b></td>
                        {history.map(entry => <td key={uuid()} className={classNames({ 'earning': entry.profit > 0, 'expense': entry.profit < 0})}>{dollarString(entry.profit)}</td>)}
                    </tr>
                </tbody>
            </table>
        </div>
    )}
}

export default FinanceTable
