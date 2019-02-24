import React from 'react'

import { dollarString } from '../../../util/Misc'
import VisibleInvestmentsPopover from '../../../containers/VisibleInvestmentsPopover'

const FinanceCompanySheet = ({ financials, investments }) => (
    <div className="quarter panel">
        <h3>Company</h3>
        <table id="company">
            <tbody>
                <tr>
                    <td><b>Cash</b></td>
                    <td>{dollarString(financials.cash)}</td>
                </tr>
                <tr>
                    <td><b>Assets</b></td>
                    <td>{dollarString(financials.assets)}</td>
                </tr>
                <tr>
                    <td><b>Liabilities</b></td>
                    <td>{dollarString(financials.liabilities)}</td>
                </tr>
                <tr className="table-border-top">
                    <td><b>Net Worth</b></td>
                    <td>{dollarString(financials.netWorth)}</td>
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
