import React from 'react'
import TooltipTrigger from 'react-popper-tooltip'
import {CONSULTANCY_TEMPLATES} from '../../../constants/MarketingConstants'

const ConsultancyPopover = () => (
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
                    <h3>Consultancies</h3>
                    <div className="borderedList">
                        <ul>
                            {CONSULTANCY_TEMPLATES.map(consultancyTemplate =>
                                <li>
                                    <div className="margin-bottom">
                                        <button>
                                            <img className="icon" alt="" src={require('../../../static/icons/' + consultancyTemplate.iconPath)} />{consultancyTemplate.title}
                                            <div className="subtitle withImage">{consultancyTemplate.description}</div>
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
            Hire Consultant
            </button>
        )}
     </TooltipTrigger>
)

export default ConsultancyPopover
