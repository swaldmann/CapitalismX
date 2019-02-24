import React from 'react'
import TooltipTrigger from 'react-popper-tooltip'
import {LOGISTIC_PARTNER_TEMPLATES} from '../../../constants/ProductionConstants'
import { dollarString } from '../../../util/Misc'

class LogisticPartnerPopover extends React.Component {

    state = {
        showsTooltip: false
    }

    onVisibilityChange = (tooltipShown) => {
        this.setState({ showsTooltip: tooltipShown })
    }

    switchLogisticPartner = (logisticPartnerIndex, actions) => {
        this.setState({ showsTooltip: false })
        actions.switchLogisticPartner(logisticPartnerIndex)
    }

    render() {
        const {actions/*, logisticPartnerIndex*/} = this.props
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
                <div className="column-flexbox">
                    <h3>Available Logistic Partners</h3>
                    <div className="borderedList">
                        <ul>
                            {LOGISTIC_PARTNER_TEMPLATES.map((logisticPartnerTemplate, logisticPartnerIndex) =>
                                <li>
                                    <div className="margin-bottom">
                                        <button onClick={() => this.switchLogisticPartner(logisticPartnerIndex, actions)}>
                                            <div className="cell-title margin-bottom-large">{logisticPartnerTemplate.title}</div>
                                            <div className="flexbox subtitle">
                                                <div className="cell-title">{dollarString(logisticPartnerTemplate.price)}/delivery</div>
                                                <div className="cell-detailTitle">Quality {logisticPartnerTemplate.quality}</div>
                                            </div>
                                        </button>
                                    </div>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
                </div>
            )}
          >
            {({ getTriggerProps, triggerRef }) => (
              <button
                {...getTriggerProps({
                  ref: triggerRef,
                  className: 'trigger centered'
                  /* your props here */
                })}
              >
                Hire Logistic Partner
                </button>
            )}
         </TooltipTrigger>
)}}

export default LogisticPartnerPopover
