import React from 'react'
import TooltipTrigger from 'react-popper-tooltip'

import {LOBBYIST_TEMPLATES} from '../../../constants/MarketingConstants'


class LobbyistPopover extends React.Component {

    state = {
        showsTooltip: false
    }

    onVisibilityChange = (tooltipShown) => {
        this.setState({ showsTooltip: tooltipShown })
    }

    hireLobbyist = (lobbyistIndex, actions) => {
        this.setState({ showsTooltip: false })
        actions.hireLobbyist(lobbyistIndex)
    }

    render() {
        const { actions } = this.props
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
                        <h3>Lobbyists</h3>
                        <div className="borderedList">
                            <ul>
                                {LOBBYIST_TEMPLATES.map((lobbyistTemplate, lobbyistIndex) =>
                                    <li>
                                        <div className="margin-bottom">
                                            <button onClick={() => this.hireLobbyist(lobbyistIndex, actions)}>

                                                <div className="cell-title margin-bottom-medium">{lobbyistTemplate.iconPath && <img className="icon" alt="" src={require('../../../static/icons/' + lobbyistTemplate.iconPath)} />}{lobbyistTemplate.title}
                                                </div>
                                                <div className="flexbox subtitle">
                                                    <div className="cell-title">${lobbyistTemplate.costPerMonth}/month</div>
                                                    <div className="cell-detailTitle">Tax Rate {lobbyistTemplate.taxRate * 100}%</div>
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
                Choose Lobbyist
                </button>
            )}
         </TooltipTrigger>
     )}
}

export default LobbyistPopover
