import React from 'react'

const FinanceCompanySheet = ({ financials }) => (
    <div className="quarter panel">
        <h2><i className="fas fa-building"></i>Company</h2>
        <table id="company">
            <tbody>
                <tr>
                    <td><b>Cash</b></td>
                    <td>${financials.cash}</td>
                </tr>
                <tr>
                    <td><b>Assets</b></td>
                    <td>${financials.assets}</td>
                </tr>
                <tr>
                    <td><b>Liabilities</b></td>
                    <td>$0</td>
                </tr>
                <tr className="table-border-top">
                    <td><b>Net Worth</b></td>
                    <td>${financials.cash + financials.assets}</td>
                </tr>
            </tbody>
        </table>
        <button>Go public</button>
    </div>
)

export default FinanceCompanySheet
