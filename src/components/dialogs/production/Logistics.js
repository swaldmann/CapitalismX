import React from 'react'
import { deepCopyWithUUID, dateStringAfterElapsedDays } from '../../../util/Misc'
import VisibleLogisticPartnerPanel from '../../../containers/VisibleLogisticPartnerPanel'

class Logistics extends React.Component {
    buyTruck = (truckTemplate, actions) => {
        actions.buyTruck(truckTemplate)
        actions.purchase(5000)
    }

    render() {
        const { trucks, elapsedDays, truckTemplate, actions } = this.props

        return (
            <div className="dialogDetail">
                <div className="quarter panel">
                    <VisibleLogisticPartnerPanel />
                    <h4>Logistic</h4>
                </div>
                <div className="column-flexbox remaining-size">
                    <h3>Truck Fleet</h3>
                    <div className="borderedList">
                        <ul>
                            {trucks.map(truck =>
                                <li key={truck.uuid}>
                                    <div className="flexbox">
                                        <img className="icon" src={require('../../../static/icons/icons8-truck.png')} alt="" />
                                        <span className="cell-title content-size">1200 units/day</span>
                                        <span className="cell-detailTitle remaining-size">Level 1</span>
                                        <button>↑</button>
                                    </div>
                                    <div className="flexbox">
                                        <span className="cell-title content-size">Bought { dateStringAfterElapsedDays(truck.buyDay) }</span>
                                        <span className="cell-detailTitle remaining-size">{truck.price.toLocaleString("en-US", {style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0})}</span>
                                        <button className="destructive" onClick={() => actions.sellTruck(truck.uuid)}>Sell</button>
                                    </div>
                                </li>
                            )}
                        </ul>
                    </div>
                    <button className="centered" onClick={() => this.buyTruck({...deepCopyWithUUID(truckTemplate), buyDay: elapsedDays}, actions)}>Buy Truck ($5,000)</button>
                </div>
                <div className="panel quarter">
                    <h3>Statistics</h3>
                </div>
            </div>
        )
    }
}

export default Logistics
