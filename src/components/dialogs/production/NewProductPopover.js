import React from 'react'
import TooltipTrigger from 'react-popper-tooltip'
import VisibleComponentGrid from '../../../containers/VisibleComponentGrid'
import InputNumber from 'rc-input-number'
import {deepCopyWithUUID, deepCopy} from '../../../util/Misc.js'
import * as classNames from "classnames"
import VisibleSupplierPopover from "../../../containers/VisibleSupplierPopover"

class NewProductPopover extends React.Component {

    state = {
        productName: "",
        price: 1000
    }

    onChangePrice = (price) => {
        this.setState({ price: price })
    }

    onChangeProductName = (event) => {
        this.setState({ productName: event.target.value })
    }

    launchProduct = () => {
        const {productTemplates, currentProductTemplateIndex, componentTypeTemplates, actions, elapsedDays} = this.props
        const productTemplate = productTemplates[currentProductTemplateIndex]
        const price = this.state.price
        const name = this.state.productName || productTemplate.productCategoryName
        const components = productTemplate.components.map(componentType => componentTypeTemplates[componentType.index])
        const newProduct = deepCopyWithUUID({...productTemplate, unitsSold: 0, price: price, name: name, buyDay: elapsedDays, components: deepCopy(components) })
        actions.introduceNewProduct(newProduct)
        actions.purchase(newProduct.launchPrice)
    }

 render() {
     const {productTemplates, currentProductTemplateIndex, componentTypeTemplates, actions} = this.props
     //console.log(componentTypeTemplates)
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
                     <div className="flexbox margin-bottom-large">
                         {productTemplates.map((productTemplate, productTemplateIndex) =>
                             <div key={productTemplate.uuid} className="quarter">
                                 <button className={classNames({selected: currentProductTemplateIndex === productTemplateIndex})} onClick={ () => actions.switchCurrentProductTemplateIndex(productTemplateIndex) }>
                                     {productTemplate.productCategoryName}
                                 </button>
                             </div>
                         )}
                     </div>
                     <input onChange={this.onChangeProductName} type="text" placeholder={"cap" + productTemplates[currentProductTemplateIndex].productCategoryName} className="margin-bottom-large" />
                     <div className="flexbox">
                        <VisibleComponentGrid />
                        <div className="quarter">
                            {
                                productTemplates[currentProductTemplateIndex].components.map((template, templateIndex) =>
                                    //console.log(template)
                                    <VisibleSupplierPopover key={template.uuid} componentTypeTemplate={template} />
                                )
                            }
                        </div>
                     </div>
                     <div className="flexbox">
                         <label className="quarter">Price</label>
                         <InputNumber
                             className="three-quarter"
                          defaultValue={1000}
                             formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                              onChange={this.onChangePrice}
                         />
                     </div>
                     <button className="popoverFinishButton" onClick={this.launchProduct}>Launch ({productTemplates[currentProductTemplateIndex].launchPrice.toLocaleString("en-US", {style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0})})</button>
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
                 Introduce New Product
                 </button>
             )}
             </TooltipTrigger>
         )}
 }

export default NewProductPopover
