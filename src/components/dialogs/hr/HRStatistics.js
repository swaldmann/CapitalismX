import React from 'react'
import {Line} from 'react-chartjs-2'
import {quarterStrings} from '../../../util/Misc'

const data = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [{
        label: '😕',
        lineTension: 0,
        backgroundColor: "#DB3832",
        borderColor: "#DB3832",
        pointRadius: 4,
        pointBorderColor: "#eee",
        data: [65, 50, 30, 60]
    }, {
        label: '😐',
        lineTension: 0,
        backgroundColor: "#FDF050",
        borderColor: "#FDF050",
        pointRadius: 4,
        pointBorderColor: "#aaa",
        data: [10, 30, 30, 10]
    }, {
        label: '😊',
        lineTension: 0,
        backgroundColor: "#6fbd4f",
        borderColor: "#6fbd4f",
        pointRadius: 4,
        pointBorderColor: "#eee",
        data: [25, 20, 40, 30]
    }]
};

const options = {
    animation: false,
    legend: {
        reverse: true,
        display: false
    },
    tooltips: {
        mode: 'index',
        intersect: false,
        itemSort: function(a, b) {
            return b.datasetIndex - a.datasetIndex
        },
        callbacks: {
            label: function(tooltipItem, data) {
                const label = data.datasets[tooltipItem.datasetIndex].label || '';
                return label + (tooltipItem.yLabel * 100).toFixed(0) + "%"
            }
        }
    },
    responsive: true,
    scales: {
        xAxes: [{
            stacked: true,
        }],
        yAxes: [{
            stacked: true,
            ticks: {
                    callback: function(value, index, values) {
                        return value * 100 + '%';
                    },
                    min: 0,
                    max: 1
                }

        }]
    },
    segmentShowStroke: false
}

const HRStatistics = ({ hrHistory, elapsedDays }) => (
    <div className="quarter panel">
        <h3>Statistics</h3>
        <h4>Employee Satisfaction</h4>
         <Line height={180} data={{...data, labels: quarterStrings(elapsedDays), datasets: data.datasets.map((dataset, index) => ({...dataset, data: hrHistory.map((entry, dataIndex) => entry.jobSatisfactionPercentages[index])}))}} options={options} />
    </div>
)

export default HRStatistics
