import React from "react"
import Modal from "react-modal"
import {Line} from 'react-chartjs-2'
//import { RadioGroup, RadioButton } from 'react-radio-buttons'
import VisibleEmployeeList from '../../containers/VisibleEmployeeList'
import VisibleEmployeeHirePopover from '../../containers/VisibleEmployeeHirePopover'
import { SHOW_AVAILABLE, SALESPEOPLE_TYPE, ENGINEER_TYPE } from './../../constants/HRConstants'

const data = {
  labels: ['Q1', 'Q2', 'Q3', 'Q4'],
  datasets: [{
    label: 'unhappy',
    lineTension: 0,
    backgroundColor: "red",
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
  label: 'unsure',
  lineTension: 0,
  backgroundColor: "yellow",
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
  label: 'happy',
  lineTension: 0,
  backgroundColor: "green",
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

  title: {
    display: true,
    text: 'Customer Satisfaction'
  },
  tooltips: {
    mode: 'index',
    intersect: false
  },
  responsive: true,
  scales: {
    xAxes: [{
      stacked: true,
    }],
    yAxes: [{
      stacked: true
    }]
  }
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
                        <VisibleEmployeeList employeeType={SALESPEOPLE_TYPE} />
                        <VisibleEmployeeHirePopover visibilityFilter={SHOW_AVAILABLE} className="content-height" employeeType={SALESPEOPLE_TYPE} />
                    </div>
                    <div className="quarter">
                        <h3>Work Conditions</h3>
                        <h4>Working Time Model</h4>
                        {/*<RadioGroup value={this.state.selectedValue} onChange={this.onWorkModelChange} horizontal>
                            <RadioButton value="fixedHours">Fixed</RadioButton>
                            <RadioButton value="flextime">Flex</RadioButton>
                            <RadioButton value="trust-based">Trust</RadioButton>
                        </RadioGroup>*/}
                    </div>
                    <div className="quarter panel">
                        <h4>Employee Satisfaction</h4>
                        <Line data={data} options={options} />
                    </div>
                </div>
            </Modal>
        )
    }
}

export default HR
