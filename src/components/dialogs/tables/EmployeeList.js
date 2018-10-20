import React from 'react'
//import PropTypes from 'prop-types'
import EmployeeCell from './EmployeeCell'

/*class EmployeeList extends React.Component {
    render() {
        return (
            <div className="remaining-height column-flexbox">
                <h3>{this.props.employeeType}</h3>
                <div className="borderedList">
                    <ul>
                        {this.props.employees.map(employee =>
                            <EmployeeCell employee={employee}></EmployeeCell>
                        )}
                    </ul>
                </div>
            </div>
        )
    }
}*/

const EmployeeList = ({ filteredEmployees, actions }) => (
    <div className="remaining-height column-flexbox">
        <h3>{/*this.props.employeeType */}</h3>
        <div className="borderedList">
            <ul>
                {filteredEmployees.map(employee =>
                    <EmployeeCell key={employee.index} employee={employee} {...actions}></EmployeeCell>
                )}
            </ul>
        </div>
    </div>
)

/*mployeeList.propTypes = {
    filteredEmployees: PropTypes.arrayOf(PropTypes.shape({
        index: PropTypes.number.isRequired,
        isEmployed: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired,
        skill: PropTypes.number.isRequired,
        salary: PropTypes.number.isRequired,
        happiness: PropTypes.number.isRequired
    }).isRequired).isRequired,
    actions: PropTypes.object.isRequired
}*/

export default EmployeeList
