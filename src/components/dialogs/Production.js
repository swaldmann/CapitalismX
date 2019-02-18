import React from "react"
import Modal from "react-modal"
import {withRouter, Route, Link} from 'react-router-dom'
import * as classNames from "classnames"

import Products from "./production/Products"
import VisibleManufacturing from "../../containers/VisibleManufacturing"
import VisibleLogistics from "../../containers/VisibleLogistics"

class Production extends React.Component {
    closeModal = () => {
        this.props.history.push("/")
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
                        <h1 className="content-size"><i className="fas fa-wrench"></i>Production</h1>
                        <div className="tabList">
                            <Link className={classNames({ 'selected': window.location.pathname.endsWith("products")})} to="/production/products">Products</Link>
                            <Link className={classNames({ 'selected': window.location.pathname.endsWith("manufacturing")})} to="/production/manufacturing">Manufacturing</Link>
                            <Link className={classNames({ 'selected': window.location.pathname.endsWith("logistics")})} to="/production/logistics">Logistics</Link>
                        </div>
                        <button onClick={this.closeModal} className="dialogClose"><i className="fas fa-times fa-2x"></i></button>
                    </div>
                    <Route path="/production/products" component={Products} />
                    <Route path="/production/manufacturing" component={VisibleManufacturing} />
                    <Route path="/production/logistics" component={VisibleLogistics} />
            </Modal>
        )
    }
}

export default withRouter(Production)
