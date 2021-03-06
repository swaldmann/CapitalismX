import React from 'react'
import { uniqueIDFromIntegers, numberOfElapsedYears } from "../../../util/Misc"
import * as classNames from "classnames"

class ComponentGrid extends React.Component {
    render() {
        const {productTemplate, productTemplateIndex, componentTypeTemplates, elapsedDays, actions} = this.props
        return (
            <div className="grid">
                <h4 className="text-center">Components</h4>
            {
                productTemplate.components.map((componentType, i) =>
                <div className="grid-column" key={i}>
                    <div><img src={require('../../../static/icons/' + componentType.imageName + '.png')} alt="" />{componentType.typeDescription}</div>
                    {componentTypeTemplates[componentType.index].allComponents.map((component, j) => {
                        return <button
                          component={component}
                                key={uniqueIDFromIntegers(i, j)}
                          className={classNames({ 'componentActive': componentTypeTemplates[componentType.index].currentIndex === j,
                                               'componentAvailable': component.availabilityOffset <= numberOfElapsedYears(elapsedDays) })}
                           disabled={component.availabilityOffset > numberOfElapsedYears(elapsedDays)}
                            onClick={() => actions.switchCurrentComponent(productTemplateIndex, componentType.index, j)}
                        >{component.name}</button>}
                    )}
                </div>
                )
            }
        </div>
    )}
}

export default ComponentGrid
