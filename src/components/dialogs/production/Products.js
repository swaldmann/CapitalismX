import React from 'react'
import VisibleNewProductPopover from "../../../containers/VisibleNewProductPopover"
//import VisibleComponentGrid from "../../../containers/VisibleComponentGrid"

class Products extends React.Component {
    render() {
        const { products, actions } = this.props
        console.log(products);

        return (
            <div className="dialogDetail">
                <div className="quarter panel"></div>
                <div className="column-flexbox remaining-size">
                    <h3>Products</h3>
                    <div className="borderedList">
                        <ul>
                            <li>{products.map(product => product.productCategoryName)}</li>
                        </ul>
                    </div>
                    <VisibleNewProductPopover />
                </div>
                {/*<VisibleComponentGrid />*/}
                <div className="quarter panel">
                    <h3>Statistics</h3>
                </div>
            </div>
        )
    }
}

export default Products
