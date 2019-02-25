import React from 'react'
import TooltipTrigger from 'react-popper-tooltip'
import InputNumber from 'rc-input-number'
import { dollarString } from '../../../util/Misc'

class ConsultancyPopover extends React.Component {

    state = {
        showsTooltip: false,
        currentInputNumber: 1000
    }

    onVisibilityChange = (tooltipShown) => {
        this.setState({ showsTooltip: tooltipShown })
    }

    onInputNumberChange = (newInputNumber) => {
        this.setState({ currentInputNumber: newInputNumber })
    }

    buyFund = (uuid, amount, actions) => {
        this.setState({ showsTooltip: false })
        actions.buyFund(uuid, amount, actions)
        actions.purchaseAsset(amount)
        this.setState({ currentInputNumber: 1000 })
    }

    sellFund = (uuid, amount, actions) => {
        this.setState({ showsTooltip: false })
        actions.sellFund(uuid, amount, actions)
        actions.purchaseAsset(-amount)
        this.setState({ currentInputNumber: 1000 })
    }

    render() {
    const { investment, cash, actions} = this.props

    return (
        <TooltipTrigger
            placement="top"
            trigger="click"
            tooltipShown={this.state.showsTooltip}
            onVisibilityChange={this.onVisibilityChange}
            tooltip={({
              getTooltipProps,
              getArrowProps,
              tooltipRef,
              arrowRef,
              placement
            }) => (
              <div
                {...getTooltipProps({
                  ref: tooltipRef,
                  className: 'tooltip-container'
                })}
              >
                <div
                  {...getArrowProps({
                    ref: arrowRef,
                    'data-placement': placement,
                    className: 'tooltip-arrow'
                  })}
                />
                    <InputNumber autoFocus={true} placeholder={1000} defaultValue={1000} onChange={this.onInputNumberChange} formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')} />
                    <div className="flexbox">
                        <button onClick={() => this.sellFund(investment.uuid, this.state.currentInputNumber, actions)} className="destructive" disabled={this.state.currentInputNumber > investment.amount || this.state.currentInputNumber <= 0 || this.state.currentInputNumber === "" || typeof(this.state.currentInputNumber) !== "number"}>Sell</button>
                        <button onClick={() => this.buyFund(investment.uuid, this.state.currentInputNumber, actions)} className="constructive" disabled={this.state.currentInputNumber > cash || this.state.currentInputNumber <= 0 || this.state.currentInputNumber === "" || typeof(this.state.currentInputNumber) !== "number"}>Buy</button>
                    </div>
                </div>
            )}
          >
            {({ getTriggerProps, triggerRef }) => (
              <button
                {...getTriggerProps({
                  ref: triggerRef,
                  className: 'trigger centered number-input'
                  /* your props here */
                })}
              >
                {dollarString(investment.amount)}
                </button>
            )}
         </TooltipTrigger>
     )}
}

export default ConsultancyPopover
