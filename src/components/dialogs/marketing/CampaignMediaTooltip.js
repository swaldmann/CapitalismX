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
                        <li key={campaignMediaTemplate.uuid}>
                            <div className="margin-bottom">
                                <button onClick={() => campaignMediaActions.startCampaign(campaignTemplate, campaignMediaTemplate, elapsedDays)}>
                                    <div className="flexbox">
                                        <span className="cell-title content-size">{campaignMediaTemplate.iconPath && <img src={require("../../../static/icons/" + campaignMediaTemplate.iconPath)} className="icon" alt="" />}{campaignMediaTemplate.name}</span>
                                        <span className="cell-detailTitle remaining-size">{campaignMediaTemplate.cost.toLocaleString("en-US", {style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0})}</span>
                                    </div>
                                    <div className="subtitle"><i className="fas fa-fw fa-xs fa-user-friends"></i>{campaignMediaTemplate.reach}</div>
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
