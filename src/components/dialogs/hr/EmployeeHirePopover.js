import React from 'react'
import TooltipTrigger from 'react-popper-tooltip'
import VisibleEmployeeList from '../../../containers/VisibleEmployeeList'
import { SHOW_AVAILABLE } from '../../../constants/HRConstants'

const EmployeeHirePopover = ({ employeeType }) => (
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
            <VisibleEmployeeList visibilityFilter={SHOW_AVAILABLE} employeeType={employeeType} />
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
            Hire {employeeType}
            </button>
        )}
     </TooltipTrigger>
)

export default EmployeeHirePopover
