import React from 'react'

const ProductsInfoColumn = () => (
    <div className="quarter panel">
        <h3>Manufacturing</h3>
        <p>
            <label><input type="checkbox" />Eco-friendly production</label>
            <div className="checkbox-subtitle">+ $2/unit</div>
        </p>
        <p>
            <label><input type="checkbox" />Increased Quality Assurance</label>
            <div className="checkbox-subtitle">+ $3/unit</div>
        </p>
    </div>
)

export default ProductsInfoColumn
