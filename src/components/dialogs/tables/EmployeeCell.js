import React from 'react'
import StarRatings from 'react-star-ratings'

const happinessIcons = ["😊", "😐", "☹️"]

class EmployeeCell extends React.Component {

    hireEmployee = () => {
        this.props.employee.isEmployed = true
    }

    fireEmployee = () => {
        this.props.employee.isEmployed = false
    }

    render() {
        return (
            <li>
                <div className="margin-bottom">
                    {this.props.employee.name}
                    <span className="pull-right">
                        {this.props.employee.salary.toLocaleString("en-US", {style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0})}
                        {this.props.employee.isEmployed && <a>Raise</a>}
                    </span>
                </div>
                <StarRatings
                  rating={this.props.employee.skill}
                  starRatedColor="orange"
                  starDimension="10px"
                  starSpacing="3px"
                />
                <span className="pull-right" role="img" aria-label="Happiness">
                    {this.props.employee.isEmployed && happinessIcons[this.props.employee.happiness]}
                    {this.props.employee.isEmployed && <a className="fire" onClick={this.fireEmployee}>Fire</a>}
                    {!this.props.employee.isEmployed && <a className="hire" onClick={this.hireEmployee}>Hire</a>}
                </span>
            </li>
        )
    }
}

export default EmployeeCell
