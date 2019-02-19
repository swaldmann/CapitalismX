import React from 'react'
import {uniqueIDFromIntegers} from "../../../util/Misc"
import * as classNames from "classnames"

import VisibleSupplierPopover from "../../../containers/VisibleSupplierPopover"

const ComponentGrid = ({productTemplate, productUtilities, elapsedDays, actions}) => (
    <div className="three-quarter">
        <div className="grid">
        {
            productTemplate.components.map((componentType, i) =>
            <div className="grid-column" key={i}>
                <div><img src={require('../../../static/icons/' + componentType.imageName + '.png')} alt="" />{componentType.typeDescription}</div>
                {componentType.allComponents.map((component, j) =>
                    <VisibleSupplierPopover component={component}
                            key={uniqueIDFromIntegers(i, j)}
                      className={classNames({ 'componentActive': componentType.currentIndex === j,
                                           'componentAvailable': component.availabilityOffset <= elapsedDays })}
                        onClick={() => actions.switchCurrentComponent(i, j)}
                    />
                )}
            </div>
            )
        }
        {/*<div className="debug-box">
        <b>Debug</b> Total utility: {productUtilities[k]}
        </div>*/}
    </div>
    {/*<button className="dashedButton">New Product<div className="buttonSubtitle">$500,000</div></button>*/}
    </div>
)

export default ComponentGrid
