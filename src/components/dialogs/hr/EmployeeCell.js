import React from 'react'
import StarRatings from 'react-star-ratings'

const happinessIcons = ["😊", "😐", "☹️"]

class EmployeeCell extends React.Component {

    render() {
        const { employee, hireEmployee, fireEmployee } = this.props

        return (
            <li>
                <div className="margin-bottom">
                    {employee.name}
                    <span className="pull-right-inline">
                        {employee.salary.toLocaleString("en-US", {style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0})}
                        {employee.isEmployed && <a>Raise</a>}
                    </span>
                </div>
                <StarRatings
                  rating={employee.skill}
                  starRatedColor="orange"
                  starDimension="10px"
                  starSpacing="3px"
                />
                <span className="pull-right-inline" role="img">
                    {employee.isEmployed && happinessIcons[employee.happiness]}
                    {employee.isEmployed && <a className="fire" onClick={() => fireEmployee(employee.index)}>Fire</a>}
                    {!employee.isEmployed && <a className="hire" onClick={() => hireEmployee(employee.index)}>Hire</a>}
                </span>
            </li>
        )
    }
}

export default EmployeeCell
