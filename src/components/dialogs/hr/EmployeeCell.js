import React from 'react'
import StarRatings from 'react-star-ratings'
import VisibleTrainingPopover from '../../../containers/VisibleTrainingPopover'

const happinessIcons = ["😕", "😐", "😊"]

class EmployeeCell extends React.Component {
    hireEmployee = () => {
        const { hireEmployee, purchase, employee } = this.props
        hireEmployee(employee.index)
        purchase(5000)
    }

    fireEmployee = () => {
        const { fireEmployee, purchase, employee } = this.props
        purchase(5000)
        fireEmployee(employee.index)
    }

    render() {
        const { employee } = this.props
        console.log(employee)
        return (
            <li>
                <div className="flexbox">
                    <span className="cell-title content-size">{employee.name}</span>
                    <span className="cell-detailTitle remaining-size">{employee.salary.toLocaleString("en-US", {style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0})}</span>
                    {employee.isEmployed && <VisibleTrainingPopover employee={employee} />}
                </div>
                <div className="flexbox">
                    <StarRatings
                      rating={employee.skill/20}
                      starRatedColor="orange"
                      starDimension="10px"
                      starSpacing="3px"
                    />
                    <span className="cell-detailTitle remaining-size emoji">{employee.isEmployed && happinessIcons[employee.happiness]}</span>
                    {employee.isEmployed && <button className="destructive" onClick={this.fireEmployee}>Fire</button>}
                    {!employee.isEmployed && <button className="constructive" onClick={this.hireEmployee}>Hire</button>}
                </div>
            </li>
        )
    }
}

export default EmployeeCell
