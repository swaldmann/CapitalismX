import React from 'react'
import TooltipTrigger from 'react-popper-tooltip'

import {SUPPLIER_TEMPLATES} from '../../../constants/ProductionConstants'

const SupplierPopover = ({component, elapsedDays, buttonDisabled, buttonClassName, actions}) => (
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
                    <h3>Supplier</h3>
                    <div className="borderedList">
                        <ul>
                            {SUPPLIER_TEMPLATES.map((supplierTemplate, trainingIndex) =>
                                <li>
                                    <div className="margin-bottom">
                                        <button onClick={() => alert("yo")}>
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
              className: {buttonClassName},//'trigger centered constructive'
              /* your props here */
              disabled: {buttonDisabled}
            })}
          >
            {component.name}
            </button>
        )}
     </TooltipTrigger>
)

export default SupplierPopover
