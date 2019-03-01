import React from "react"
import Modal from "react-modal"
import {withRouter, Route, Link, Switch} from 'react-router-dom'
import * as classNames from "classnames"

import VisibleProducts from "../../containers/VisibleProducts"
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
                            <Link className={classNames({ 'selected': window.location.pathname.endsWith("products") || window.location.pathname.endsWith("production")})} to="/production/products">Products</Link>
                            <Link className={classNames({ 'selected': window.location.pathname.endsWith("manufacturing")})} to="/production/manufacturing">Manufacturing</Link>
                            <Link className={classNames({ 'selected': window.location.pathname.endsWith("logistics")})} to="/production/logistics">Logistics</Link>
                        </div>
                        <button onClick={this.closeModal} className="dialogClose"><i className="fas fa-times fa-2x"></i></button>
                    </div>
                    <Switch>
                        <Route path="/production/manufacturing" component={VisibleManufacturing} />
                        <Route path="/production/logistics" component={VisibleLogistics} />
                        <Route path="*" component={VisibleProducts} />
                    </Switch>
            </Modal>
        )
    }
}

export default withRouter(Production)
