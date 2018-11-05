import React from 'react'

const ProductsInfoColumn = ({totalUtilities}) => (
    <div className="quarter panel">
        {totalUtilities.map((utility, i) => <p key={i}>Total utility{utility}</p>)}
    </div>
)

export default ProductsInfoColumn
