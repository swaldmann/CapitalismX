import React from 'react'
import { RadioGroup, Radio } from 'react-radio-group'
import {
    WORKING_TIME_MODEL_TEMPLATES,
    WORKING_HOUR_TEMPLATES,
    COMPANY_CAR_TEMPLATES,
    IT_EQUIPMENT_TEMPLATES,
    FOOD_BENEFITS_TEMPLATES,
    GYM_MEMBERSHIP_TEMPLATES
 } from '../../../constants/HRConstants'

import { dollarString } from '../../../util/Misc'

class WorkConditions extends React.Component {
    render() {
        const { workingTimeModelIndex, workingHoursIndex, companyCarPolicyIndex, foodBenefitsIndex, itEquipmentPolicyIndex, gymMembershipIndex, actions } = this.props
        return (
        <div className="quarter panel">
            <h3>Work Conditions</h3>
            <h4>Working Time Model</h4>
            <RadioGroup selectedValue={workingTimeModelIndex} onChange={value => actions.setWorkingTimeModelIndex(value)}>
                {
                    WORKING_TIME_MODEL_TEMPLATES.map(template =>
                        <span key={template.index}><Radio value={template.index} />{template.description}<div className="subtitle">{dollarString(template.monthlyCostPerEmployee)} per employee/month</div></span>
                    )
                }
            </RadioGroup>
            <h4>Working Hours</h4>
            <RadioGroup selectedValue={workingHoursIndex} onChange={value => actions.setWorkingHoursIndex(value)}>
                {
                    WORKING_HOUR_TEMPLATES.map(template =>
                        <span key={template.index}><Radio value={template.index} />{template.description}<div className="subtitle">{dollarString(template.monthlyCostPerEmployee)} per employee/month</div></span>
                    )
                }
            </RadioGroup>
            <h4>Company Car</h4>
            <RadioGroup selectedValue={companyCarPolicyIndex} onChange={value => actions.setCompanyCarPolicyIndex(value)}>
                {
                    COMPANY_CAR_TEMPLATES.map(template =>
                        <span key={template.index}><Radio value={template.index} />{template.description}<div className="subtitle">{dollarString(template.monthlyCostPerEmployee)} per employee/month</div></span>
                    )
                }
            </RadioGroup>
            <h4>IT Equipment</h4>
            <RadioGroup selectedValue={itEquipmentPolicyIndex} onChange={value => actions.setITEquipmentPolicyIndex(value)}>
                {
                    IT_EQUIPMENT_TEMPLATES.map(template =>
                        <span key={template.index}><Radio value={template.index} />{template.description}<div className="subtitle">{dollarString(template.monthlyCostPerEmployee)} per employee/month</div></span>
                    )
                }
            </RadioGroup>
            <h4>Food/Coffee</h4>
            <RadioGroup selectedValue={foodBenefitsIndex} onChange={value => actions.setFoodBenefitsIndex(value)}>
                {
                    FOOD_BENEFITS_TEMPLATES.map(template =>
                        <span key={template.index}><Radio value={template.index} />{template.description}<div className="subtitle">{dollarString(template.monthlyCostPerEmployee)} per employee/month</div></span>
                    )
                }
            </RadioGroup>
            <h4>Gym</h4>
            <RadioGroup selectedValue={gymMembershipIndex} onChange={value => actions.setGymMembershipIndex(value)}>
                {
                    GYM_MEMBERSHIP_TEMPLATES.map(template =>
                        <span key={template.index}><Radio value={template.index} />{template.description}<div className="subtitle">{dollarString(template.monthlyCostPerEmployee)} per employee/month</div></span>
                    )
                }
            </RadioGroup>
        </div>
    )}
}

export default WorkConditions
