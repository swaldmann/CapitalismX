import React from 'react'
import {Line} from 'react-chartjs-2'
import {quarterStrings} from '../../../util/Misc'

const data = {
  labels: ['Q1', 'Q2', 'Q3', 'Q4'],
  datasets: [
    {
      //fill: false,
      lineTension: 0,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80]
    }
  ]
};

const options = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
    legend: {
        display: false
    }
    /*,
    animation: {
        duration: 1000,
        onComplete: (e) => {
            //alert("Complet")
            options.animation.duration = null
            options.animation.onComplete = null
            //this.initExport()
        }
    }*/
}

class FinanceCharts extends React.Component {
    render() {
        const { financialHistory, elapsedDays } = this.props
        const history = financialHistory.slice(Math.max(financialHistory.length - 4, 1))

        return (
        <div className="quarter panel">
            <h3>Statistics</h3>
            <h4>Sales</h4>
            <Line height={100} options={options} data={{...data, labels: quarterStrings(elapsedDays), datasets: [{...data.datasets[0], data: history.map(entry => entry.sales.toFixed(0))}]}} />
            <h4>Salaries</h4>
            <Line height={100} options={options} data={{...data, labels: quarterStrings(elapsedDays), datasets: [{...data.datasets[0], data: history.map(entry => entry.salaries.toFixed(0))}]}} />
            <h4>Investments</h4>
            <Line height={100} options={options} data={{...data, labels: quarterStrings(elapsedDays), datasets: [{...data.datasets[0], data: history.map(entry => entry.totalInvestmentAmount.toFixed(0))}]}} />
            <h4>Loans</h4>
            <Line height={100} options={options} data={{...data, labels: quarterStrings(elapsedDays), datasets: [{...data.datasets[0], data: history.map(entry => entry.loans.toFixed(0))}]}} />
        </div>
    )}
}

export default FinanceCharts
