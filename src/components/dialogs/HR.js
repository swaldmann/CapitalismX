import React from "react"
import Modal from "react-modal"
import { RadioGroup, RadioButton } from 'react-radio-buttons'
import * as Constants from '../../models/constants/Employees.js'
import EmployeeTable from './tables/EmployeeTable'
import EmployeeHirePopover from './tables/EmployeeHirePopover'

class HR extends React.Component {

    constructor(props) {
        super(props)
        console.log("fs")
        this.state = ({
            hiredEngineers: this.props.graph.engineers.value[0].filter(e => e.isEmployed),
            availableEngineers: this.props.graph.engineers.value[0].filter(e => !e.isEmployed),
            hiredSalespeople: this.props.graph.salespeople.value[0].filter(s => s.isEmployed),
            availableSalespeople: this.props.graph.salespeople.value[0].filter(s => !s.isEmployed)
        })
    }

    closeModal = () => {
        window.history.back()
    }

    onWorkModelChange = (value) => {
        this.setState({selectedValue: value})
    }

    render() {
        console.log("Now")
        console.log(this.state)
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
                    <a onClick={this.closeModal} className="dialogClose"><i className="fas fa-times fa-2x"></i></a>
                </div>
                <div className="dialogDetail">
                    <div className="quarter column-flexbox">
                        <EmployeeTable employeeType="Engineers" employees={this.props.graph.engineers.value[0].filter(e => e.isEmployed)} />
                        <EmployeeHirePopover className="content-height" employeeType="Engineers" hireableEmployees={this.props.graph.engineers.value[0].filter(e => !e.isEmployed)} />
                    </div>
                    <div className="quarter column-flexbox">
                        <EmployeeTable employeeType="Salespeople" employees={this.props.graph.salespeople.value[0].filter(s => s.isEmployed)} />
                        <EmployeeHirePopover className="content-height" employeeType="Salespeople" hireableEmployees={this.props.graph.salespeople.value[0].filter(s => !s.isEmployed)} />
                    </div>
                    <div className="quarter">
                        <h3>Work Conditions</h3>
                        <h4>Working Time Model</h4>
                        <RadioGroup value={this.state.selectedValue} onChange={this.onWorkModelChange} horizontal>
                            <RadioButton value="fixedHours">Fixed</RadioButton>
                            <RadioButton value="flextime">Flex</RadioButton>
                            <RadioButton value="trust-based">Trust</RadioButton>
                        </RadioGroup>
                    </div>
                    <div className="quarter panel">
                        <h4>Employee Satisfaction</h4>
                    </div>
                </div>
            </Modal>
        )
    }
}

export default HR
