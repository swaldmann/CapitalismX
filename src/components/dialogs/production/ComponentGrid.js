import React from 'react'
import {uniqueIDFromIntegers} from "../../../util/Misc"
import * as classNames from "classnames"

const ComponentGrid = ({products, productUtilities, actions}) => (
    <div className="half">
    {
        products.map((product, k) =>
        <div className="grid" key={k}>
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
        {productUtilities[k]}
        </div>
    )}
    <button className="dashedButton">New Product<div className="buttonSubtitle">$500,000</div></button>
    </div>
)

export default ComponentGrid
