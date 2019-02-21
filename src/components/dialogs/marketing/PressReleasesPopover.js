import React from 'react'
import TooltipTrigger from 'react-popper-tooltip'
import {PRESS_RELEASE_TEMPLATES} from '../../../constants/MarketingConstants'

class PressReleasesPopover extends React.Component {
    state = {
        showsTooltip: false
    }

    onVisibilityChange = (tooltipShown) => {
        this.setState({ showsTooltip: tooltipShown })
    }

    makePressRelease = (pressReleaseTemplate, elapsedDays, actions) => {
        this.setState({ showsTooltip: false })
        actions.makePressRelease(pressReleaseTemplate, elapsedDays)
    }

    render() {
        const {actions, elapsedDays} = this.props
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
                    <h3>Press Releases</h3>
                    <div className="borderedList">
                        <ul>
                            {PRESS_RELEASE_TEMPLATES.map(pressReleaseTemplate =>
                                <li>
                                    <div className="margin-bottom">
                                        <button onClick={() => this.makePressRelease(pressReleaseTemplate, elapsedDays, actions)}>
                                            {pressReleaseTemplate.name}
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
                Public Statement
                </button>
            )}
         </TooltipTrigger>
     )}
}

export default PressReleasesPopover
