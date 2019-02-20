import React from 'react'
import {uniqueIDFromIntegers} from "../../../util/Misc"
import * as classNames from "classnames"

import VisibleSupplierPopover from "../../../containers/VisibleSupplierPopover"

class ComponentGrid extends React.Component {
    render() {
        const {productTemplate, elapsedDays, actions} = this.props
        return (
            <div className="grid">
            {
                productTemplate.components.map((componentType, i) =>
                <div className="grid-column" key={i}>
                    <div><img src={require('../../../static/icons/' + componentType.imageName + '.png')} alt="" />{componentType.typeDescription}</div>
                    {componentType.allComponents.map((component, j) => {
                        return <VisibleSupplierPopover
                        componentType={componentType}
                          component={component}
                                key={uniqueIDFromIntegers(i, j)}
                          buttonClassName={classNames({ 'componentActive': componentType.currentIndex === j,
                                                     'componentAvailable': component.availabilityOffset <= elapsedDays })}
                            onClick={() => actions.switchCurrentComponent(i, j)}
                        />}
                    )}
                </div>
                )
            }
            {/*<div className="debug-box">
            <b>Debug</b> Total utility: {productUtilities[k]}
            </div>*/}
        </div>
    )}
}

export default ComponentGrid
