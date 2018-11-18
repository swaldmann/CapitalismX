import React from "react"
import Modal from "react-modal"

import VisibleCampaignList from '../../containers/VisibleCampaignList'
import VisiblePressReleasesList from '../../containers/VisiblePressReleasesList'
import VisibleMarketResearchesList from '../../containers/VisibleMarketResearchesList'

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
                        <VisiblePressReleasesList />
                        <VisibleMarketResearchesList />
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
