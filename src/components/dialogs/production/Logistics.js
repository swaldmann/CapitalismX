import React from 'react'
import { deepCopyWithUUID, dateStringAfterElapsedDays, dollarString } from '../../../util/Misc'
import VisibleLogisticPartnerPanel from '../../../containers/VisibleLogisticPartnerPanel'

class Logistics extends React.Component {
    buyTruck = (truckTemplate, actions) => {
        actions.buyTruck(truckTemplate)
        actions.purchase(truckTemplate.price)
    }

    sellTruck = (truck, actions) => {
        actions.sellTruck(truck.uuid)
        actions.purchase(-truck.price)
    }

    buyWarehouse = (warehouseTemplate, actions) => {
        actions.buyWarehouse(warehouseTemplate)
        actions.purchase(warehouseTemplate.price)
    }

    sellWarehouse = (warehouse, actions) => {
        actions.sellWarehouse(warehouse.uuid)
        actions.purchase(-warehouse.price)
    }

    render() {
        const { trucks, truckTemplate, warehouses, warehouseTemplate, elapsedDays, actions } = this.props

        return (
            <div className="dialogDetail">
                <div className="quarter panel">
                    <VisibleLogisticPartnerPanel />
                </div>
                <div className="column-flexbox quarter">
                    <h3>Truck Fleet</h3>
                    <div className="borderedList">
                        <ul>
                            {trucks.map(truck =>
                                <li key={truck.uuid}>
                                    <div className="flexbox">
                                        <img className="icon" src={require('../../../static/icons/icons8-truck.png')} alt="" />
                                        <span className="cell-title remaining-size">{truck.dailyUsedCapacity}/{truck.dailyCapacity}</span>
                                        <span className="cell-detailTitle content-size level">1</span>
                                        <button>↑</button>
                                    </div>
                                    <div className="flexbox">
                                        <span className="cell-title content-size">{/*"Bought" +*/ dateStringAfterElapsedDays(truck.buyDay) }</span>
                                        <span className="cell-detailTitle remaining-size">{ dollarString(truck.price)}</span>
                                        <button className="destructive" onClick={() => this.sellTruck(truck, actions)}>Sell</button>
                                    </div>
                                </li>
                            )}
                        </ul>
                    </div>
                    <button className="centered" onClick={() => this.buyTruck({...deepCopyWithUUID(truckTemplate), buyDay: elapsedDays}, actions)}>Buy Truck ($5,000)</button>
                </div>
                <div className="column-flexbox quarter">
                    <h3>Warehouses</h3>
                    <div className="borderedList">
                        <ul>
                            {warehouses.map(warehouse =>
                                <li key={warehouse.uuid}>
                                    <div className="flexbox">
                                        <img className="icon" src={require('../../../static/icons/icons8-garage_closed.png')} alt="" />
                                        <span className="cell-title remaining-size">{warehouse.capacityUsed}/{warehouse.capacity}</span>
                                        <span className="cell-detailTitle content-size level">1</span>
                                        <button>↑</button>
                                    </div>
                                    <div className="flexbox">
                                        <span className="cell-title content-size">{/*"Bought" +*/ dateStringAfterElapsedDays(warehouse.buyDay) }</span>
                                        <span className="cell-detailTitle remaining-size">{ dollarString(warehouse.price)}</span>
                                        <button className="destructive" onClick={() => this.sellWarehouse(warehouse, actions)}>Sell</button>
                                    </div>
                                </li>
                            )}
                        </ul>
                    </div>
                    <button className="centered" onClick={() => this.buyWarehouse({...deepCopyWithUUID(warehouseTemplate), buyDay: elapsedDays}, actions)}>Buy Warehouse ($50,000)</button>
                </div>
                <div className="panel quarter">
                    <h3>Statistics</h3>
                </div>
            </div>
        )
    }
}

export default Logistics
