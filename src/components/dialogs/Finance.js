import React from "react"
import Modal from "react-modal"

class Finance extends React.Component {
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
                    <h1><i className="fas fa-coins"></i>Finance</h1>
                    <button onClick={this.closeModal} className="dialogClose"><i className="fas fa-times fa-2x"></i></button>
                </div>
                <div className="dialogDetail">
                    <div className="quarter panel height250">
                        <h2><i className="fas fa-building"></i>Company</h2>
                        <table id="company">
                            <tbody>
                                <tr>
                                    <td><b>Cash</b></td>
                                    <td>$91,319</td>
                                </tr>
                                <tr>
                                    <td><b>Assets</b></td>
                                    <td>$150,000</td>
                                </tr>
                                <tr>
                                    <td><b>Liabilities</b></td>
                                    <td>$0</td>
                                </tr>
                                <tr className="table-border-top">
                                    <td><b>Net Worth</b></td>
                                    <td>$241,319</td>
                                </tr>
                            </tbody>
                        </table>
                        <button>Go public</button>
                    </div>
                    <div className="half">
                        <h2><i className="fas fa-exchange-alt"></i>Cashflow</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>January</th>
                                    <th>February</th>
                                    <th>March</th>
                                </tr>
                            </thead>
                        </table>
                        <hr />
                        <table id="expenses">
                            <tbody>
                                <tr>
                                    <td><b>Material</b></td>
                                    <td>$3,500</td>
                                    <td>$4,000</td>
                                    <td>$5,000</td>
                                </tr>
                                <tr>
                                    <td><b>Staff</b></td>
                                    <td>$103,000</td>
                                    <td>$105,000</td>
                                    <td>$105,000</td>
                                </tr>
                                <tr>
                                    <td><b>Loan interest</b></td>
                                    <td>$3,000</td>
                                    <td>$5,000</td>
                                    <td>$5,000</td>
                                </tr>
                            </tbody>
                        </table>
                        <hr />
                        <table id="earnings">
                            <tbody>
                                <tr>
                                    <td><b>Sales</b></td>
                                    <td>$350,000</td>
                                    <td>$400,000</td>
                                    <td>$500,000</td>
                                </tr>
                                <tr>
                                    <td><b>Investments</b></td>
                                    <td>$150,000</td>
                                    <td>$100,000</td>
                                    <td>$130,000</td>
                                </tr>
                                <tr>
                                    <td><b>Loans</b></td>
                                    <td>$100,000</td>
                                    <td>$0</td>
                                    <td>$0</td>
                                </tr>
                            </tbody>
                        </table>
                        <hr />
                        <table>
                            <tbody>
                                <tr>
                                    <td><b>Total</b></td>
                                    <td>$350,000</td>
                                    <td>$400,000</td>
                                    <td>$500,000</td>
                                </tr>
                            </tbody>
                        </table>
                        <button>Take out loan</button>
                    </div>
                    <div className="quarter panel">
                        djfsk
                    </div>
                </div>
            </Modal>
        )
    }
}

export default Finance
