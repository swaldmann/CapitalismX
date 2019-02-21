import React from 'react'
import TooltipTrigger from 'react-popper-tooltip'

import {CONSULTANCY_TEMPLATES} from '../../../constants/MarketingConstants'

class ConsultancyPopover extends React.Component {

    state = {
        showsTooltip: false
    }

    onVisibilityChange = (tooltipShown) => {
        this.setState({ showsTooltip: tooltipShown })
    }

    hireConsultancy = (consultancyIndex, actions) => {
        this.setState({ showsTooltip: false })
        actions.hireConsultancy(consultancyIndex)
    }

    render() {
    const {/*hiredConsultancyIndex,*/ actions} = this.props

    return (
        <TooltipTrigger
            placement="top"
            trigger="click"
            tooltipShown={this.state.showsTooltip}
            onVisibilityChange={this.onVisibilityChange}
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
                        <h3>Consultancies</h3>
                        <div className="borderedList">
                            <ul>
                                {CONSULTANCY_TEMPLATES.map((consultancyTemplate, consultancyIndex) =>
                                    <li>
                                        <div className="margin-bottom">
                                            <button onClick={() => this.hireConsultancy(consultancyIndex, actions)}>
                                                <img className="icon" alt="" src={require('../../../static/icons/' + consultancyTemplate.iconPath)} />{consultancyTemplate.title}
                                                <div className="subtitle withImage">{consultancyTemplate.description}</div>
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
                  className: 'trigger centered'
                  /* your props here */
                })}
              >
                Choose Consultancy
                </button>
            )}
         </TooltipTrigger>
     )}
}

export default ConsultancyPopover
