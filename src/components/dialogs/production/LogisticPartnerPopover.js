import React from 'react'
import TooltipTrigger from 'react-popper-tooltip'
import {LOGISTIC_PARTNER_TEMPLATES} from '../../../constants/ProductionConstants'

const LogisticPartnerPopover = ({actions, logisticPartnerIndex}) => (
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
                <h3>Available Logistic Partners</h3>
                <div className="borderedList">
                    <ul>
                        {LOGISTIC_PARTNER_TEMPLATES.map((logisticPartnerTemplate, logisticPartnerIndex) =>
                            <li>
                                <div className="margin-bottom">
                                    <button onClick={() => actions.switchLogisticPartner(logisticPartnerIndex)}>
                                        {logisticPartnerTemplate.title}
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
)

export default LogisticPartnerPopover
