import React from 'react'
import TooltipTrigger from 'react-popper-tooltip'
import {CAMPAIGN_TYPES, CAMPAIGN_MEDIA_TYPES} from '../../../constants/MarketingConstants'
import StackedTooltip from '../../parts/StackedTooltip'

const CampaignPopover = () => (
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
                <h3>Campaigns</h3>
                <div className="borderedList">
                    <ul>
                        {CAMPAIGN_TYPES.map(campaignType =>
                            <li>
                                <div className="margin-bottom">
                                    <StackedTooltip title={campaignType.name} tooltipList={CAMPAIGN_MEDIA_TYPES} />
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
            Start Campaign
            </button>
        )}
     </TooltipTrigger>
)

export default CampaignPopover
