import React from 'react'
import VisibleNewProductPopover from "../../../containers/VisibleNewProductPopover"

class Products extends React.Component {
    render() {
        const { products } = this.props

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
                                        <span className="cell-title content-size">{"Nike" + product.productCategoryName}</span>
                                        <span className="cell-detailTitle remaining-size">{product.price.toLocaleString("en-US", {style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0})}</span>
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
