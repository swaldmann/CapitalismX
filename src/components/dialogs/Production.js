import React from "react"
import Modal from "react-modal"

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
                <a onClick={this.closeModal} className="dialogClose"><i className="fas fa-times fa-2x"></i></a>
                <div className="dialogContent">
                    <h1><i className="fas fa-wrench"></i>Production</h1>
                    <div className="dialogDetail">
                    </div>
                </div>
            </Modal>
        )
    }
}

export default Production
