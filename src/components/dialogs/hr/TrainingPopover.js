import React from 'react'
import TooltipTrigger from 'react-popper-tooltip'

import {TRAINING_TEMPLATES} from '../../../constants/HRConstants'

const TrainingPopover = ({lobbyistIndex, actions}) => (
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
                    <h3>Trainings</h3>
                    <div className="borderedList">
                        <ul>
                            {/*TRAINING_TEMPLATES.map((trainingTemplate, trainingIndex) =>
                                <li>
                                    <div className="margin-bottom">
                                        <button onClick={() => actions.hireLobbyist(lobbyistIndex)}>
                                            {trainingTemplate.title}
                                        </button>
                                    </div>
                                </li>
                            )*/}
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
              className: 'trigger centered constructive'
              /* your props here */
            })}
          >
            Train
            </button>
        )}
     </TooltipTrigger>
)

export default TrainingPopover
