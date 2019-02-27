import React from 'react'
import Rating from 'react-rating'
import { dollarString } from '../../../util/Misc'

class ProductsInfoColumn extends React.Component {
    onSwitchRandD = (value, actions) => {
        actions.switchRAndDIndex(value)
    }

    onSwitchSystemsSecurity = (value, actions) => {
        actions.switchSystemsSecurityIndex(value)
    }

    onSwitchProcessAutomation = (value, actions) => {
        actions.switchProcessAutomationIndex(value)
    }

    render() {
        const { rAndDIndex,
                rAndDTemplates,
                systemsSecurityIndex,
                systemsSecurityTemplates,
                processAutomationIndex,
                processAutomationTemplates,
                actions
             } = this.props
        return (
        <div className="quarter panel">
            <h3>Manufacturing</h3>
            <h4>R&D Investment</h4>
            <div>
                <Rating emptySymbol={"far fa-circle"} fullSymbol={"fas fa-circle"} initialRating={rAndDIndex + 1} onClick={(value) => this.onSwitchRandD(value - 1, actions)}/>
                <div>
                    <label>{rAndDTemplates[rAndDIndex].name}</label><br />
                    <label className="subtitle">{dollarString(rAndDTemplates[rAndDIndex].cost)}</label>
                </div>
            </div>
            <h4>Systems Security Investment</h4>
            <div>
                <Rating emptySymbol={"far fa-circle"} fullSymbol={"fas fa-circle"} initialRating={systemsSecurityIndex + 1} onClick={(value) => this.onSwitchSystemsSecurity(value - 1, actions)}/>
                <div>
                    <label>{systemsSecurityTemplates[systemsSecurityIndex].name}</label><br />
                    <label className="subtitle">{dollarString(systemsSecurityTemplates[systemsSecurityIndex].cost)}</label>
                </div>
            </div>
            <h4>Process Automation Investment</h4>
            <div>
                <Rating emptySymbol={"far fa-circle"} fullSymbol={"fas fa-circle"} initialRating={processAutomationIndex + 1} onClick={(value) => this.onSwitchProcessAutomation(value - 1, actions)}/>
                <div>
                    <label>{processAutomationTemplates[processAutomationIndex].name}</label><br />
                    <label className="subtitle">{dollarString(processAutomationTemplates[processAutomationIndex].cost)}</label>
                </div>
            </div>
        </div>
    )}
}


export default ProductsInfoColumn
