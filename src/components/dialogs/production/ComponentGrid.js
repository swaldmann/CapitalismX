import React from 'react'
import {uniqueIDFromIntegers} from "../../../util/Misc"
import * as classNames from "classnames"

const ComponentGrid = ({products, actions}) => (
    <div className="grid">
        {
            products[0].map((componentType, i) =>
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
    </div>
)

export default ComponentGrid
