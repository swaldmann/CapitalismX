import React from 'react'
import * as uuid from 'uuid/v4'
import {dollarString, quarterStrings} from '../../../util/Misc'
import * as classNames from 'classnames'

class FinanceTable extends React.Component {
    render() {
        const { financialHistory, simulationState } = this.props

        // Get 4 last elements of history
        const history = financialHistory.slice(Math.max(financialHistory.length - 4, 1))

        return (
        <div className="half">
            <h3>Operations</h3>
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
                        {history.map(entry => <td key={uuid()}>{dollarString(entry.totalSalesRevenue)}</td>)}
                    </tr>
                </tbody>
            </table>
            <hr />
            <table className="expenses">
                <tbody>
                    <tr>
                        <td><b>Salaries</b></td>
                        {history.map(entry => <td key={uuid()}>{dollarString(-entry.salaries)}</td>)}
                    </tr>
                    <tr>
                        <td><b>Material</b></td>
                        {history.map(entry => <td key={uuid()}>{dollarString(-entry.totalMaterialCosts)}</td>)}
                    </tr>
                    <tr>
                        <td><b>Machines</b></td>
                        {history.map(entry => <td key={uuid()}>{dollarString(-entry.totalMachineCosts)}</td>)}
                    </tr>
                    <tr>
                        <td><b>Logistics</b></td>
                        {history.map(entry => <td key={uuid()}>{dollarString(-entry.totalLogisticsCosts)}</td>)}
                    </tr>
                    <tr>
                        <td><b>Lobbying</b></td>
                        {history.map(entry => <td key={uuid()}>{dollarString(-entry.totalLobbyistCosts)}</td>)}
                    </tr>
                    <tr>
                        <td><b>Marketing</b></td>
                        {history.map(entry => <td key={uuid()}>{dollarString(-entry.totalMarketingCosts)}</td>)}
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
                        <td><b>Loan Interest</b></td>
                        {history.map(entry => <td key={uuid()}>{dollarString(entry.loanInterests)}</td>)}
                    </tr>
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
                        <td><b>NOPAT</b></td>
                        {history.map(entry => <td key={uuid()} className={classNames({ 'earning': entry.profit > 0, 'expense': entry.profit < 0})}>{dollarString(entry.profit)}</td>)}
                    </tr>
                </tbody>
            </table>
            <h3 className="margin-top-large">Asset Changes</h3>
            <table>
                <tbody>
                    <tr>
                        <td><b>Capital Gains</b></td>
                        {history.map(entry => <td key={uuid()} className={classNames({ 'earning': entry.totalInvestmentEarnings > 0, 'expense': entry.totalInvestmentEarnings < 0})}>{dollarString(entry.totalInvestmentEarnings)}</td>)}
                    </tr>
                    <tr>
                        <td><b>Assets Bought</b></td>
                        {history.map(entry => <td key={uuid()} className={classNames({ 'expense': entry.totalAssetsBought < 0})}>{dollarString(entry.totalAssetsBought)}</td>)}
                    </tr>
                    <tr>
                        <td><b>Assets Sold</b></td>
                        {history.map(entry => <td key={uuid()} className={classNames({ 'earning': entry.totalAssetsSold > 0})}>{dollarString(entry.totalAssetsSold)}</td>)}
                    </tr>
                    <tr>
                        <td><b>Depreciation</b></td>
                        {history.map(entry => <td key={uuid()}>{dollarString(entry.totalDepreciation)}</td>)}
                    </tr>
                </tbody>
            </table>
        </div>
    )}
}

export default FinanceTable
