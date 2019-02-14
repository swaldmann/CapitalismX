import React from 'react'
import TooltipTrigger from 'react-popper-tooltip'

import {TRAINING_TEMPLATES} from '../../../constants/HRConstants'

const TrainingPopover = ({employee, trainingIndex, actions}) => (
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
                            {TRAINING_TEMPLATES.map((trainingTemplate, trainingIndex) =>
                                <li>
                                    <div className="margin-bottom">
                                        <button disabled={employee.skill + trainingTemplate.skillIncrease > 5} onClick={() => actions.trainEmployee(employee.index, trainingTemplate.skillIncrease, trainingTemplate.salaryIncreasePercentage)}>

                                            <div className="flexbox">
                                                <span className="cell-title content-size">{trainingTemplate.name}</span>
                                                <span className="cell-detailTitle remaining-size">{trainingTemplate.cost.toLocaleString("en-US", {style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0})}</span>
                                            </div>
                                            <div className="subtitle">{"Skill +" + trainingTemplate.skillIncrease + ", Salary +" + (trainingTemplate.salaryIncreasePercentage * 100) + "%"}</div>
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
