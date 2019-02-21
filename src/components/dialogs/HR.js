import React from "react"
import Modal from "react-modal"
import {withRouter} from 'react-router-dom'
//import {Line} from 'react-chartjs-2'

import VisibleEmployeeList from '../../containers/VisibleEmployeeList'
import VisibleEmployeeHirePopover from '../../containers/VisibleEmployeeHirePopover'
import VisibleWorkConditions from '../../containers/VisibleWorkConditions'
import VisibleHRStatistics from '../../containers/VisibleHRStatistics'
import { SHOW_AVAILABLE, SALESPEOPLE_TYPE, ENGINEER_TYPE } from './../../constants/HRConstants'

class HR extends React.Component {

    closeModal = () => {
        this.props.history.push("/")
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
                    <VisibleWorkConditions />
                    <div className="quarter column-flexbox">
                        <VisibleEmployeeList employeeType={ENGINEER_TYPE} />
                        <VisibleEmployeeHirePopover visibilityFilter={SHOW_AVAILABLE} className="content-height" employeeType={ENGINEER_TYPE} />
                    </div>
                    <div className="quarter column-flexbox">
                        <VisibleEmployeeList employeeType={SALESPEOPLE_TYPE} className="remaining-size" />
                        <VisibleEmployeeHirePopover visibilityFilter={SHOW_AVAILABLE} className="content-height" employeeType={SALESPEOPLE_TYPE} />
                    </div>
                    <VisibleHRStatistics />
                </div>
            </Modal>
        )
    }
}

export default withRouter(HR)
