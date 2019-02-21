import React from 'react'
import TooltipTrigger from 'react-popper-tooltip'
import {CAMPAIGN_TEMPLATES} from '../../../constants/MarketingConstants'
import VisibleCampaignMediaTooltip from '../../../containers/VisibleCampaignMediaTooltip'

class CampaignPopover extends React.Component {

    render() {
        return (
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
                                {CAMPAIGN_TEMPLATES.map(campaignTemplate =>
                                    <li key={campaignTemplate.index}>
                                        <div className="margin-bottom">
                                            <VisibleCampaignMediaTooltip campaignTemplate={campaignTemplate} />
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
                })}
              >
                Start Campaign
                </button>
            )}
         </TooltipTrigger>
     )}
 }

export default CampaignPopover
