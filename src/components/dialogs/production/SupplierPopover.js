import React from 'react'
import TooltipTrigger from 'react-popper-tooltip'

import { deepCopyWithUUID, dollarString } from '../../../util/Misc'
import {SUPPLIER_TEMPLATES} from '../../../constants/ProductionConstants'

class SupplierPopover extends React.Component {

    state = {
        showsTooltip: false
    }

    onVisibilityChange = (tooltipShown) => {
        this.setState({ showsTooltip: tooltipShown })
    }

    switchComponentTypeSupplier = (componentIndex, supplier, actions) => {
        actions.switchComponentTypeSupplier(componentIndex, supplier)
        this.setState({ showsTooltip: false })
    }

    render() {
        const { componentTypeTemplate, buttonClassName, actions} = this.props

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
                        <div className="column-flexbox">
                            <h3>Supplier</h3>
                            <div className="borderedList">
                                <ul>
                                    {SUPPLIER_TEMPLATES.map((supplierTemplate, supplierIndex) =>
                                        <li key={supplierIndex}>
                                            <div className="margin-bottom">
                                                <button onClick={() => this.switchComponentTypeSupplier(componentTypeTemplate.index, deepCopyWithUUID(supplierTemplate), actions) }>
                                                    <div className="flexbox">
                                                        <span className="cell-title content-size">{supplierTemplate.name}</span>
                                                        <span className="cell-detailTitle remaining-size">{dollarString(componentTypeTemplate.allComponents[componentTypeTemplate.currentIndex].cost * supplierTemplate.costMultiplicator)}</span>
                                                    </div>
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
                      className: 'grid-supplier',//'trigger centered constructive'
                      disabled: false
                    })}
                  >
                        <div className="cell-title"></div>
                        <div>{componentTypeTemplate.supplier.name}<span className="cell-detailTitle">({dollarString(componentTypeTemplate.allComponents[componentTypeTemplate.currentIndex].cost * componentTypeTemplate.supplier.costMultiplicator)})</span></div>
                    </button>
                )}
             </TooltipTrigger>
    )}
}

export default SupplierPopover
