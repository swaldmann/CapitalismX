import React from 'react'
import { RadioGroup, Radio } from 'react-radio-group'
import {
    WORKING_TIME_MODEL_FIXED, WORKING_TIME_MODEL_FLEX, WORKING_TIME_MODEL_TRUST,
    WORKING_HOURS_6, WORKING_HOURS_8, WORKING_HOURS_10,
    COMPANY_CAR_SEDAN, COMPANY_CAR_SUBCOMPACT,COMPANY_CAR_NONE,
    FOOD_BENEFITS_NONE, FOOD_BENEFITS_FREE, FOOD_BENEFITS_PAID,
    GYM_MEMBERSHIP_NONE, GYM_MEMBERSHIP_SUBSIDIZED, GYM_MEMBERSHIP_FREE
 } from '../../../constants/HRConstants'

const WorkConditions = ({ workingTimeModel, workingHours, companyCarPolicy, foodBenefits, gymMembership, actions }) => (
    <div className="quarter panel">
        <h3>Work Conditions</h3>
        <h4>Working Time Model</h4>
        <RadioGroup selectedValue={workingTimeModel} onChange={value => actions.setWorkingTimeModel(value)}>
            <Radio value={WORKING_TIME_MODEL_FIXED} />Fixed Hours<div className="subtitle">No changes</div>
            <Radio value={WORKING_TIME_MODEL_FLEX} />Flexible Hours<div className="subtitle">-$30 per employee/month</div>
            <Radio value={WORKING_TIME_MODEL_TRUST} />Trust-based<div className="subtitle">-$50 per employee/month</div>
        </RadioGroup>
        <h4>Working Hours</h4>
        <RadioGroup selectedValue={workingHours} onChange={value => actions.setWorkingHours(value)}>
            <Radio value={WORKING_HOURS_6} />10 hours<div className="subtitle">+$50 per employee/month</div>
            <Radio value={WORKING_HOURS_8} />8 hours<div className="subtitle">No changes</div>
            <Radio value={WORKING_HOURS_10} />6 hours<div className="subtitle">-$100 per employee/month</div>
        </RadioGroup>
        <h4>Company Car</h4>
        <RadioGroup selectedValue={companyCarPolicy} onChange={value => actions.setCompanyCarPolicy(value)}>
            <Radio value={COMPANY_CAR_NONE} />None<div className="subtitle">No changes</div>
            <Radio value={COMPANY_CAR_SUBCOMPACT} />Subcompact<div className="subtitle">-$120 per employee/month</div>
            <Radio value={COMPANY_CAR_SEDAN} />Sedan<div className="subtitle">-$200 per employee/month</div>
        </RadioGroup>
        <h4>Food/Coffee</h4>
        <RadioGroup selectedValue={foodBenefits} onChange={value => actions.setFoodBenefits(value)}>
            <Radio value={FOOD_BENEFITS_NONE} />None<div className="subtitle">No changes</div>
            <Radio value={FOOD_BENEFITS_FREE} />Free<div className="subtitle">-$100 per employee/month</div>
            <Radio value={FOOD_BENEFITS_PAID} />Paid<div className="subtitle">+$80 per employee/month</div>
        </RadioGroup>
        <h4>Gym</h4>
        <RadioGroup selectedValue={gymMembership} onChange={value => actions.setGymMembership(value)}>
            <Radio value={GYM_MEMBERSHIP_NONE} />None<div className="subtitle">No changes</div>
            <Radio value={GYM_MEMBERSHIP_SUBSIDIZED} />Subsidized<div className="subtitle">-$20 per employee/month</div>
            <Radio value={GYM_MEMBERSHIP_FREE} />Free<div className="subtitle">-$50 per employee/month</div>
        </RadioGroup>
    </div>
)

export default WorkConditions
