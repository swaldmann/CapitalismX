import React from 'react'
import TooltipTrigger from 'react-popper-tooltip'

import {LOBBYIST_TEMPLATES} from '../../../constants/MarketingConstants'

const LobbyistPopover = ({lobbyistIndex, actions}) => (
    <TooltipTrigger
        placement="top"
        trigger="click"
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
                                        <button onClick={() => actions.hireLobbyist(lobbyistIndex)}>
                                            <img className="icon" alt="" src={require('../../../static/icons/' + lobbyistTemplate.iconPath)} />{lobbyistTemplate.title}
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
)

export default LobbyistPopover
