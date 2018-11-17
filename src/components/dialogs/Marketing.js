import React from "react"
import Modal from "react-modal"

import VisibleCampaignList from '../../containers/VisibleCampaignList'
import VisiblePRPopover from '../../containers/VisiblePRPopover'
import VisibleResearchPopover from '../../containers/VisibleResearchPopover'

Modal.setAppElement("body")

class Marketing extends React.Component {
    closeModal = () => {
        window.history.back()
    }

    render() {
        return (
            <Modal
                isOpen={true}
                onRequestClose={this.closeModal}
                contentLabel="Marketing"
                className="modal"
                overlayClassName="overlay"
            >
                <div className="dialogHeader">
                    <h1><i className="fas fa-chart-line"></i>Marketing</h1>
                    <button onClick={this.closeModal} className="dialogClose"><i className="fas fa-times fa-2x"></i></button>
                </div>
                <div className="dialogDetail">
                    <div className="panel">
                        <h3>Internal</h3>
                        <h4>Online courses</h4>
                    </div>
                    <div className="half flexbox">
                        <VisibleCampaignList />
                        <div className="third column-flexbox">
                            <h3>Press Releases</h3>
                            <div className="borderedList remaining-height">
                                <ul>
                                    <li>Privacy and Security Efforts</li>
                                    <li>Stable Prices</li>
                                    <li>Fast Delivery Times</li>
                                    <li>Apology</li>
                                </ul>
                            </div>
                            <VisiblePRPopover />
                        </div>
                        <div className="third column-flexbox">
                            <h3>Market Research</h3>
                            <div className="borderedList remaining-height">
                                <ul>
                                    <li>Price Sensitivity</li>
                                    <li>Company Summary</li>
                                    <li>Customer Satisfaction</li>
                                    <li>Market Statistics</li>
                                    <li>Benchmarking Statistics</li>
                                </ul>
                            </div>
                            <VisibleResearchPopover />
                        </div>
                    </div>
                    <div className="quarter panel">
                        <h3>Public Relations</h3>
                        <h4>Lobbying</h4>
                        <h4>Management Consultancy</h4>
                    </div>
                </div>
            </Modal>
        )
    }
}

export default Marketing
