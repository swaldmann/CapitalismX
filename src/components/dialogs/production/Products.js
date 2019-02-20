import React from 'react'
import VisibleNewProductPopover from "../../../containers/VisibleNewProductPopover"
import {dateStringAfterElapsedDays} from '../../../util/Misc'

class Products extends React.Component {
    render() {
        const { products, actions } = this.props

        return (
            <div className="dialogDetail">
                <div className="quarter panel">
                    <h3>Research</h3>
                </div>
                <div className="column-flexbox remaining-size">
                    <h3>Products</h3>
                    <div className="borderedList">
                        <ul>
                            {products.map(product =>
                                <li>
                                    <div className="flexbox">
                                        <span className="cell-title content-size"><b>{product.name}</b> ({product.unitsSold} sold)</span>
                                        <span className="cell-detailTitle remaining-size"><b>{product.price.toLocaleString("en-US", {style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0})}</b></span>
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
