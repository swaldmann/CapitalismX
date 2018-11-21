import React from "react"
import TooltipTrigger from 'react-popper-tooltip'
import * as classNames from "classnames"
import {CAMPAIGN_MEDIA_TEMPLATES} from '../../../constants/MarketingConstants'

const CampaignMediaTooltip = ({campaignTemplate, campaignMediaActions, elapsedDays}) => (
    <TooltipTrigger
        placement="right"
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
              className: 'tooltip-container tooltip-secondary'
            })}
          >
            <div
              {...getArrowProps({
                ref: arrowRef,
                'data-placement': placement/*,
                className: 'tooltip-arrow'*/
              })}
            />
                <ul>
                    {CAMPAIGN_MEDIA_TEMPLATES.map(campaignMediaTemplate =>
                        <li>
                            <div className="margin-bottom">
                                <button onClick={() => campaignMediaActions.startCampaign(campaignTemplate, campaignMediaTemplate, elapsedDays)}>
                                    {campaignMediaTemplate.iconPath && <img src={require("../../../static/icons/" + campaignMediaTemplate.iconPath)} className="icon" alt="" />}
                                    {campaignMediaTemplate.name}
                                    <div className="subtitle">{campaignMediaTemplate.subtitle}</div>
                                </button>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        )}
      >
        {({ getTriggerProps, triggerRef }) => (
          <button
            {...getTriggerProps({
              ref: triggerRef,
              className: classNames({'trigger': true,
                                     'centered': true})
              /* your props here */
            })}
          >
            {campaignTemplate.name}
            </button>
        )}
     </TooltipTrigger>
)

export default CampaignMediaTooltip
