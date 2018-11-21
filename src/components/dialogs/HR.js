import React from "react"
import Modal from "react-modal"
import {Line} from 'react-chartjs-2'
import VisibleEmployeeList from '../../containers/VisibleEmployeeList'
import VisibleEmployeeHirePopover from '../../containers/VisibleEmployeeHirePopover'
import VisibleWorkConditions from '../../containers/VisibleWorkConditions'
import { SHOW_AVAILABLE, SALESPEOPLE_TYPE, ENGINEER_TYPE } from './../../constants/HRConstants'

const data = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [{
        label: '☹️',
        lineTension: 0,
        backgroundColor: "#DB3832",
        borderColor: "#DB3832",
        pointRadius: 4,
        pointBorderColor: "#eee",
        data: [{
            y: 65
        },{
            y: 50
        },{
            y: 30
        },{
            y: 60
        }]
    }, {
        label: '😐',
        lineTension: 0,
        backgroundColor: "#FDF050",
        borderColor: "#FDF050",
        pointRadius: 4,
        pointBorderColor: "#aaa",
        data: [{
            x: 0,
            y: 10
        },{
            x: 0,
            y: 30
        },{
            x: 0,
            y: 30
        },{
            x: 0,
            y: 10
        }]
    }, {
        label: '😊',
        lineTension: 0,
        backgroundColor: "#6fbd4f",
        borderColor: "#6fbd4f",
        pointRadius: 4,
        pointBorderColor: "#eee",
        data: [{
            x: 0,
            y: 25
        },{
            x: 0,
            y: 20
        },{
            x: 0,
            y: 40
        },{
            x: 0,
            y: 30
        }]
    }]
};

const options = {
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
                        return value + '%';
                    }
                }
        }]
    },
    segmentShowStroke: false
}


class HR extends React.Component {

    closeModal = () => {
        window.history.back()
    }

    /*onWorkModelChange = (value) => {
        this.setState({selectedValue: value})
    }*/

    render() {
        return (
            <Modal
                isOpen={true}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                contentLabel="Marketing"
                className="modal"
                overlayClassName="overlay"
            >
                <div className="dialogHeader">
                    <h1><i className="fas fa-users"></i>Human Resources</h1>
                    <button onClick={this.closeModal} className="dialogClose"><i className="fas fa-times fa-2x"></i></button>
                </div>
                <div className="dialogDetail">
                    <div className="quarter column-flexbox">
                        <VisibleEmployeeList employeeType={ENGINEER_TYPE} />
                        <VisibleEmployeeHirePopover visibilityFilter={SHOW_AVAILABLE} className="content-height" employeeType={ENGINEER_TYPE} />
                    </div>
                    <div className="quarter column-flexbox">
                        <VisibleEmployeeList employeeType={SALESPEOPLE_TYPE} className="remaining-size" />
                        <VisibleEmployeeHirePopover visibilityFilter={SHOW_AVAILABLE} className="content-height" employeeType={SALESPEOPLE_TYPE} />
                    </div>
                    <VisibleWorkConditions />
                    <div className="quarter panel">
                        <h4>Employee Satisfaction</h4>
                        <Line height={180} data={data} options={options} />
                    </div>
                </div>
            </Modal>
        )
    }
}

export default HR
