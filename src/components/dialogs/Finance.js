import React from "react"
import Modal from "react-modal"
import {withRouter} from 'react-router-dom'

import VisibleFinanceTable from "../../containers/VisibleFinanceTable"
import VisibleFinanceCharts from "../../containers/VisibleFinanceCharts"
import VisibleFinanceCompanySheet from "../../containers/VisibleFinanceCompanySheet"

class Finance extends React.Component {
    closeModal = () => {
        this.props.history.push('/')
    }

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
                    <h1><i className="fas fa-coins"></i>Finance</h1>
                    <button onClick={this.closeModal} className="dialogClose"><i className="fas fa-times fa-2x"></i></button>
                </div>
                <div className="dialogDetail">
                    <VisibleFinanceCompanySheet />
                    <VisibleFinanceTable />
                    <VisibleFinanceCharts />
                </div>
            </Modal>
        )
    }
}

export default withRouter(Finance)
