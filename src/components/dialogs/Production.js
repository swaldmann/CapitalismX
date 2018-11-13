import React from "react"
import Modal from "react-modal"
import VisibleComponentGrid from "../../containers/VisibleComponentGrid"
import VisibleProductsInfoColumn from "../../containers/VisibleProductsInfoColumn"

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
                        <button onClick={this.closeModal} className="dialogClose"><i className="fas fa-times fa-2x"></i></button>
                    </div>
                    <div className="dialogDetail">
                        <VisibleProductsInfoColumn />
                        <VisibleComponentGrid />
                    </div>
                </Modal>
            )
        }
    }

    export default Production
