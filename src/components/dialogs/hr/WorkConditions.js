import React from 'react'
import { RadioGroup, Radio } from 'react-radio-group'
import { WORKING_TIME_MODEL_FIXED, WORKING_TIME_MODEL_FLEX, WORKING_TIME_MODEL_TRUST } from '../../../constants/HRConstants'

const WorkConditions = ({ workingTimeModel, actions }) => (
    <div className="quarter">
        <h3>Work Conditions</h3>
        <h4>Working Time Model</h4>
        <RadioGroup selectedValue={workingTimeModel} onChange={value => actions.setWorkingTimeModel(value)}>
            <Radio value={WORKING_TIME_MODEL_FIXED} />Fixed<br />
            <Radio value={WORKING_TIME_MODEL_FLEX} />Flex<br />
            <Radio value={WORKING_TIME_MODEL_TRUST} />Trust<br />
        </RadioGroup>
    </div>
)

export default WorkConditions
