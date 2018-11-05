import React from 'react'
import {uniqueIDFromIntegers} from "../../../util/Misc"
import * as classNames from "classnames"

const ComponentGrid = ({products, productUtilities, actions}) => (
    <div className="three-quarter">
    {
        products.map((product, k) =>
        <div className="grid" key={k}>
        <h3>Product {k+1}</h3>
        {
            product.map((componentType, i) =>
            <div className="grid-column" key={i}>
                <div>{componentType.typeDescription}</div>
                {componentType.allComponents.map((component, j) =>
                    <button key={uniqueIDFromIntegers(i, j)}
                      className={classNames({ 'componentActive': componentType.currentIndex === j,
                                           'componentAvailable': j <= componentType.availableIndex })}
                        onClick={() => j <= componentType.availableIndex ? actions.switchCurrentComponent(i, j) : null}
                    >
                    {component.name}
                    </button>
                )}
            </div>
            )
        }
        <span className="debug-box">Total utility: {productUtilities[k]}</span>
        </div>
    )}
    <button className="dashedButton">New Product<div className="buttonSubtitle">$500,000</div></button>
    </div>
)

export default ComponentGrid
