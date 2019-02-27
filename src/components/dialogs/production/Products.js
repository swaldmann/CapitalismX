import React from 'react'
import VisibleNewProductPopover from "../../../containers/VisibleNewProductPopover"
import { dateStringAfterElapsedDays, dollarString } from '../../../util/Misc'

class Products extends React.Component {
    render() {
        const { products, actions } = this.props



        return (
            <div className="dialogDetail">
                <div className="column-flexbox remaining-size">
                    <h3>Products</h3>
                    <div className="borderedList">
                        <ul>
                            {products.map(product =>
                                <li key={product.uuid}>
                                    <div className="flexbox">
                                        <span className="cell-title content-size"><img src={require("../../../static/icons/" + product.productCategoryIconPath)} className="icon" alt="" /><b>{product.name}</b> ({product.unitsSold}{/*product.amountToProduce*/} sold)</span>
                                        <span className="cell-detailTitle remaining-size"><b>{dollarString(product.price)}</b></span>
                                    </div>
                                    <div className="flexbox">
                                    {console.log(product)}
                                        <span className="cell-title content-size">{product.components.map(component => <span><img className="icon-inline" src={require("../../../static/icons/" + component.imageName + ".png")} alt="" />{" " + component.allComponents[component.currentIndex].name + " "}</span>)}</span>
                                     </div>
                                    <div className="flexbox">
                                        <span className="cell-title content-size">Launched {dateStringAfterElapsedDays(product.buyDay)}</span>
                                        <button className="destructive" onClick={() => actions.deprecateProduct(product.uuid)}>Deprecate</button>
                                     </div>
                                </li>
                            )}
                        </ul>
                    </div>
                    <VisibleNewProductPopover />
                </div>
                <div className="quarter panel">
                    <h3>Statistics</h3>
                </div>
            </div>
        )
    }
}

export default Products
