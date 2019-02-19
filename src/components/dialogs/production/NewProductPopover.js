import React from 'react'
import TooltipTrigger from 'react-popper-tooltip'
import VisibleComponentGrid from '../../../containers/VisibleComponentGrid'

const NewProductPopover = ({productTemplates, actions, elapsedDays}) => (
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
            <div className="column-flexbox margin-bottom">
                {productTemplates.map(productTemplate =>
                    <div className="quarter">
                        <button onClick={() => console.log(elapsedDays)/*actions.introduceNewProduct(productTemplate, elapsedDays)*/}>
                            {productTemplate.productCategoryName}
                        </button>
                    </div>
                )}
            </div>
            <VisibleComponentGrid />
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
            Introduce New Product
            </button>
        )}
     </TooltipTrigger>
)

export default NewProductPopover
