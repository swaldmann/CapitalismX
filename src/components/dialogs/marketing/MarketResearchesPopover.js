import React from 'react'
import TooltipTrigger from 'react-popper-tooltip'
import {MARKET_RESEARCHES_TEMPLATES} from '../../../constants/MarketingConstants'

const MarketResearchesPopover = ({actions}) => (
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
                <h3>Market Research</h3>
                <div className="borderedList">
                    <ul>
                        {MARKET_RESEARCHES_TEMPLATES.map(marketResearchTemplate =>
                            <li>
                                <div className="margin-bottom">
                                    <button onClick={() => actions.doMarketResearch(marketResearchTemplate)}>
                                        {marketResearchTemplate.name}
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
            Conduct Research
            </button>
        )}
     </TooltipTrigger>
)

export default MarketResearchesPopover
