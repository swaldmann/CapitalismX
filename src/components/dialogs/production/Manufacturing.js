import React from 'react'
import VisibleProductsInfoColumn from "../../../containers/VisibleProductsInfoColumn"
import { deepCopyWithUUID, dateStringAfterElapsedDays } from '../../../util/Misc'

class Manufacturing extends React.Component {
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
                                        <span className="cell-title content-size">500 units/hour</span>
                                        <span className="cell-detailTitle remaining-size">Level 1</span>
                                        <button>↑</button>
                                    </div>
                                    <div className="flexbox">
                                        <span className="cell-title content-size">Bought {dateStringAfterElapsedDays(machine.buyDay)}</span>
                                        <span className="cell-detailTitle remaining-size">{machine.price.toLocaleString("en-US", {style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0})}</span>
                                        <button className="destructive" onClick={() => actions.sellMachine(machine.uuid)}>Sell</button>
                                    </div>
                                </li>
                            )}
                        </ul>
                    </div>
                    <button className="centered" onClick={() => actions.buyMachine({...deepCopyWithUUID(machineTemplate), buyDay: elapsedDays})}>Buy Machine</button>
                </div>
                <div className="panel quarter">
                    <h3>Statistics</h3>
                </div>
            </div>
        )
    }
}

export default Manufacturing
