import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import StarRatings from 'react-star-ratings'

const happinessIcons = ["😊", "😐", "☹️"]

class EmployeeCell extends React.Component {
    static propTypes = {
        hireEmployee: PropTypes.func.isRequired,
        fireEmployee: PropTypes.func.isRequired
    }

    hireEmployee = () => {
        this.props.employee.isEmployed = true
    }

    fireEmployee = () => {
        this.props.employee.isEmployed = false
    }

    render() {
        const { employee, hireEmployee, fireEmployee } = this.props

        return (
            <li>
                <div className="margin-bottom">
                    {employee.name}
                    <span className="pull-right">
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
                <span className="pull-right" role="img">
                    {employee.isEmployed && happinessIcons[employee.happiness]}
                    {employee.isEmployed && <a className="fire" onClick={() => fireEmployee(employee.index)}>Fire</a>}
                    {!employee.isEmployed && <a className="hire" onClick={() => hireEmployee(employee.index)}>Hire</a>}
                </span>
            </li>
        )
    }
}

export default EmployeeCell
