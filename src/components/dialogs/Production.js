import React from "react"
import Modal from "react-modal"
import ComponentGrid from "./production/ComponentGrid"

class Production extends React.Component {
    closeModal = () => {
        window.history.back()
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
                        <h1><i className="fas fa-wrench"></i>Production</h1>
                        <a onClick={this.closeModal} className="dialogClose"><i className="fas fa-times fa-2x"></i></a>
                    </div>
                    <div className="dialogDetail">
                        <div className="quarter panel">
                        </div>
                        <h3>Smartphone</h3>
                        <div className="half">
                            <ComponentGrid />
                        </div>
                        <div className="quarter panel">
                        </div>
                    </div>
                </Modal>
            )
        }
    }

    export default Production
