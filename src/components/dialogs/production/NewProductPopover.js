import React from 'react'
import TooltipTrigger from 'react-popper-tooltip'
import VisibleComponentGrid from '../../../containers/VisibleComponentGrid'
import InputNumber from 'rc-input-number'
import * as classNames from "classnames"


const NewProductPopover = ({productTemplates, currentProductTemplateIndex, actions, elapsedDays}) => (
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
                    {productTemplates.map((productTemplate, productTemplateIndex) =>
                        <div className="quarter">
                            <button className={classNames({selected: currentProductTemplateIndex === productTemplateIndex})} onClick={ () => actions.switchCurrentProductTemplateIndex(productTemplateIndex) }>
                                {productTemplate.productCategoryName}
                            </button>
                        </div>
                    )}
                </div>
                <input type="text" placeholder="NikePhone" />
                <VisibleComponentGrid />
                <div className="flexbox">
                    <label className="half">Price</label>
                    <InputNumber
                        className="half"
                      defaultValue={1000}
                      formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    />
                </div>
                <button className="popoverFinishButton" onClick={() => actions.introduceNewProduct({...productTemplates[currentProductTemplateIndex], price: 500 }, elapsedDays) }>Finish</button>
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
