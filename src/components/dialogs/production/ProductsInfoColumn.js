import React from 'react'

const ProductsInfoColumn = ({totalUtilities}) => (
    <div className="quarter panel">
        {totalUtilities.map(utility => <p>Total utility{utility}</p>)}
    </div>
)

export default ProductsInfoColumn
