import React from "react"
import TooltipTrigger from 'react-popper-tooltip'

class StackedTooltip extends React.Component {
    render() {
        return (
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
                        'data-placement': placement,
                        className: 'tooltip-arrow'
                      })}
                    />
                        <ul>
                            {this.props.tooltipList.map(element =>
                                <li>
                                    <div className="margin-bottom">
                                        <button>{element.name}
                                            <div className="subtitle">{element.subtitle}</div>
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
                      className: 'trigger centered'
                      /* your props here */
                    })}
                  >
                    {this.props.title}
                    </button>
                )}
             </TooltipTrigger>
        )
    }
}

export default StackedTooltip
