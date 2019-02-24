import React from 'react'

import VisibleInvestmentsPopover from '../../../containers/VisibleInvestmentsPopover'

const FinanceCompanySheet = ({ financials, investments }) => (
    <div className="quarter panel">
        <h3>Company</h3>
        <table id="company">
            <tbody>
                <tr>
                    <td><b>Cash</b></td>
                    <td>${financials.cash.toFixed(0)}</td>
                </tr>
                <tr>
                    <td><b>Assets</b></td>
                    <td>${financials.assets.toFixed(0)}</td>
                </tr>
                <tr>
                    <td><b>Liabilities</b></td>
                    <td>$0</td>
                </tr>
                <tr className="table-border-top">
                    <td><b>Net Worth</b></td>
                    <td>${financials.netWorth.toFixed(0)}</td>
                </tr>
            </tbody>
        </table>

        <h3>Investments</h3>
        { investments.map(investment =>
            <div key={investment.uuid}>
                <label className="margin-bottom">{investment.name}</label>
                <VisibleInvestmentsPopover investment={investment} />
            </div>
        )}
    </div>
)

export default FinanceCompanySheet
