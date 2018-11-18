import React from 'react'
import TooltipTrigger from 'react-popper-tooltip'
import {PRESS_RELEASE_TEMPLATES} from '../../../constants/MarketingConstants'

const PressReleasesPopover = ({actions}) => (
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
                <h3>Press Releases</h3>
                <div className="borderedList">
                    <ul>
                        {PRESS_RELEASE_TEMPLATES.map(pressReleaseTemplate =>
                            <li>
                                <div className="margin-bottom">
                                    <button onClick={() => actions.makePressRelease(pressReleaseTemplate)}>{pressReleaseTemplate.name}</button>
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
            Public Statement
            </button>
        )}
     </TooltipTrigger>
)

export default PressReleasesPopover
