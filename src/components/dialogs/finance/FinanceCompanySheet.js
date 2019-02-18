import React from 'react'
import InputNumber from 'rc-input-number'

const FinanceCompanySheet = ({ financials }) => (
    <div className="quarter panel">
        <h2><i className="fas fa-building"></i>Company</h2>
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
                    <td>${(financials.cash + financials.assets).toFixed(0)}</td>
                </tr>
            </tbody>
        </table>
        <h3>Investments</h3>
        <div className="flexbox">
            <label>Amount</label>
            <InputNumber
              defaultValue={1000}
              formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            />
        </div>
        <h3>Products</h3>
        <div className="flexbox">
            <label>Price</label>
            <InputNumber
              defaultValue={1000}
              formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            />
        </div>
    </div>
)

export default FinanceCompanySheet