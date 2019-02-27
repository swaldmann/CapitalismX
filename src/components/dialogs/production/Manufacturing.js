import React from 'react'
import VisibleProductsInfoColumn from "../../../containers/VisibleProductsInfoColumn"
import { deepCopyWithUUID, dateStringAfterElapsedDays, dollarString } from '../../../util/Misc'

class Manufacturing extends React.Component {
    buyMachine = (machineTemplate, actions) => {
        actions.buyMachine(machineTemplate)
        actions.purchaseAsset(machineTemplate.price)
    }

    sellMachine = (machine, actions) => {
        actions.sellMachine(machine.uuid)
        actions.purchaseAsset(-machine.price)
    }

    render() {
        const { machines, elapsedDays, machineTemplate, actions } = this.props

        return (
            <div className="dialogDetail">
                <VisibleProductsInfoColumn />
                <div className="column-flexbox remaining-size">
                    <h3>Machines</h3>
                    <div className="borderedList">
                        <ul>
                            {machines.map(machine =>
                                <li key={machine.uuid}>
                                    <div className="flexbox">
                                        <img className="icon" src={require('../../../static/icons/icons8-gear.png')} alt="" />
                                        <span className="cell-title remaining-size">{machineTemplate.dailyUsedCapacity}/{machineTemplate.dailyCapacity}</span>
                                        <span className="cell-detailTitle content-size-size level">{machineTemplate.technologyLevel}</span>
                                        <button>↑</button>
                                    </div>
                                    <div className="flexbox">
                                        <span className="cell-title content-size">{/*"Bought " +*/ dateStringAfterElapsedDays(machine.buyDay)}</span>
                                        <span className="cell-detailTitle remaining-size">{dollarString(machine.price)}</span>
                                        <button className="destructive" onClick={() => this.sellMachine(machine, actions)}>Sell</button>
                                    </div>
                                </li>
                            )}
                        </ul>
                    </div>
                    <button className="centered" onClick={() => this.buyMachine({...deepCopyWithUUID(machineTemplate), buyDay: elapsedDays}, actions)}>Buy Machine ({dollarString(machineTemplate.price)})</button>
                </div>
                <div className="panel quarter">
                    <h3>Statistics</h3>
                </div>
            </div>
        )
    }
}

export default Manufacturing
