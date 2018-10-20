import React from 'react'
import TooltipTrigger from 'react-popper-tooltip'
import VisibleEmployeeList from '../../../containers/VisibleEmployeeList'

class EmployeeHirePopover extends React.Component {
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
                    <VisibleEmployeeList employeeType={"Available " + this.props.employeeType} />
                  </div>
                )}
              >
                {({ getTriggerProps, triggerRef }) => (
                  <button
                    {...getTriggerProps({
                      ref: triggerRef,
                      className: 'trigger'
                      /* your props here */
                    })}
                  >
                    Hire {this.props.employeeType}
                    </button>
                )}
             </TooltipTrigger>
        )
    }
}

export default EmployeeHirePopover
