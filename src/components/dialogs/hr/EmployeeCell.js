import React from 'react'
import StarRatings from 'react-star-ratings'

const happinessIcons = ["😊", "😐", "☹️"]

class EmployeeCell extends React.Component {

    render() {
        const { employee, hireEmployee, fireEmployee } = this.props

        return (
            <li>
                <div className="flexbox">
                    <span className="cell-title content-size">{employee.name}</span>
                    <span className="cell-detailTitle remaining-size">{employee.salary.toLocaleString("en-US", {style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0})}</span>
                    {employee.isEmployed && <button>Train</button>}
                </div>
                <div className="flexbox">
                    <StarRatings
                      rating={employee.skill}
                      starRatedColor="orange"
                      starDimension="10px"
                      starSpacing="3px"
                    />
                    <span className="cell-detailTitle remaining-size">{employee.isEmployed && happinessIcons[employee.happiness]}</span>
                    {employee.isEmployed && <button className="destructive" onClick={() => fireEmployee(employee.index)}>Fire</button>}
                    {!employee.isEmployed && <button className="constructive" onClick={() => hireEmployee(employee.index)}>Hire</button>}
                </div>
            </li>
        )
    }
}

export default EmployeeCell
