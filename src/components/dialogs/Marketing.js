import React from "react"
import Modal from "react-modal"
import {withRouter} from 'react-router-dom'

import VisibleCampaignList from '../../containers/VisibleCampaignList'
import VisiblePressReleasesList from '../../containers/VisiblePressReleasesList'
import VisibleMarketResearchesList from '../../containers/VisibleMarketResearchesList'
import VisibleLobbyistPanel from '../../containers/VisibleLobbyistPanel'
import VisibleConsultancyPanel from '../../containers/VisibleConsultancyPanel'

Modal.setAppElement("body")

class Marketing extends React.Component {
    closeModal = () => {
        this.props.history.push("/")
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
                        <h3>Public Relations</h3>
                        <VisibleConsultancyPanel />
                        <VisibleLobbyistPanel />
                    </div>
                    <div className="remaining-size flexbox">
                        <VisibleCampaignList />
                        <VisiblePressReleasesList />
                        <VisibleMarketResearchesList />
                    </div>
                    <div className="panel">
                        <h3>Statistics</h3>
                    </div>
                </div>
            </Modal>
        )
    }
}

export default withRouter(Marketing)
