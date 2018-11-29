import React from 'react'

const ProductsInfoColumn = () => (
    <div className="quarter panel">
        <h3>Manufacturing</h3>
        <div>
            <label><input type="checkbox" />Eco-friendly production</label>
            <div className="checkbox-subtitle">+ $2/unit</div>
        </div>
        <div>
            <label><input type="checkbox" />Increased Quality Assurance</label>
            <div className="checkbox-subtitle">+ $3/unit</div>
        </div>
    </div>
)

export default ProductsInfoColumn
