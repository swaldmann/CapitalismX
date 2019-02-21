import React from 'react'
import TooltipTrigger from 'react-popper-tooltip'

import { deepCopyWithUUID } from '../../../util/Misc'
import {SUPPLIER_TEMPLATES} from '../../../constants/ProductionConstants'

class SupplierPopover extends React.Component {
    render() {
        const { componentTypeTemplate, buttonClassName, actions} = this.props

        return (
            <TooltipTrigger
                placement="auto"
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
                        <div className="column-flexbox">
                            <h3>Supplier</h3>
                            <div className="borderedList">
                                <ul>
                                    {SUPPLIER_TEMPLATES.map((supplierTemplate, supplierIndex) =>
                                        <li key={supplierIndex}>
                                            <div className="margin-bottom">
                                                <button onClick={() => actions.switchComponentTypeSupplier(0, deepCopyWithUUID(supplierTemplate)) }>
                                                    <div className="flexbox">
                                                        <span className="cell-title content-size">{supplierTemplate.name}</span>
                                                        <span className="cell-detailTitle remaining-size">{supplierTemplate.costMultiplicator.toLocaleString("en-US", {style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0})}</span>
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
                      className: buttonClassName,//'trigger centered constructive'

                      disabled: false
                    })}
                  >
                        <div className="cell-title"></div>
                        <div>{componentTypeTemplate.supplier.name}<span className="cell-detailTitle">${componentTypeTemplate.supplier.costMultiplicator}</span></div>
                    </button>
                )}
             </TooltipTrigger>
    )}
}

export default SupplierPopover
