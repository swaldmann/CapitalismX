import React from 'react'
import {Line} from 'react-chartjs-2'

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
                beginAtZero:true
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

const FinanceCharts = ({ financialHistory }) => (
    <div className="quarter panel">
        <h4>Salaries</h4>
        <Line height={100} options={options} data={{...data, datasets: [{...data.datasets[0], data: financialHistory.map(history => history.salaries)}]}} />
    </div>
)

export default FinanceCharts
