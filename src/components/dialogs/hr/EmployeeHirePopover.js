import React from 'react'
import TooltipTrigger from 'react-popper-tooltip'
import VisibleEmployeeList from '../../../containers/VisibleEmployeeList'
import { SHOW_AVAILABLE } from '../../../constants/HRConstants'
import { dollarString } from '../../../util/Misc'

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
            <p className="tooltip-caption">Each employee costs {dollarString(5000)} to hire<br /> or fire, regardless of skill level.</p>
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
            Hire {employeeType}
            </button>
        )}
     </TooltipTrigger>
)

export default EmployeeHirePopover
