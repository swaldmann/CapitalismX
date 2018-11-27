import React from "react"
import Modal from "react-modal"
import {withRouter} from 'react-router-dom'

import VisibleCampaignList from '../../containers/VisibleCampaignList'
import VisiblePressReleasesList from '../../containers/VisiblePressReleasesList'
import VisibleMarketResearchesList from '../../containers/VisibleMarketResearchesList'
import VisibleLobbyistPopover from '../../containers/VisibleLobbyistPopover'
import VisibleConsultancyPopover from '../../containers/VisibleConsultancyPopover'

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
                        <h3>Competitors</h3>
                        <p>Market Share: 92%</p>
                    </div>
                    <div className="remaining-size flexbox">
                        <VisibleCampaignList />
                        <VisiblePressReleasesList />
                        <VisibleMarketResearchesList />
                    </div>
                    <div className="panel">
                        <h3>Public Relations</h3>
                        <h4>Lobbying</h4>
                        <p className="description">
                            A lobbyist can assert its influence over the government, thereby mitigating its impact on the company or achieving benefits.<br />
                            <VisibleLobbyistPopover />
                        </p>
                        <h4>Management Consultancy</h4>
                        <p className="description">
                            A management consulting firm can help you make important decisions and uncover mistakes that happen in your company.<br />
                            <VisibleConsultancyPopover />
                        </p>
                    </div>
                </div>
            </Modal>
        )
    }
}

export default withRouter(Marketing)
