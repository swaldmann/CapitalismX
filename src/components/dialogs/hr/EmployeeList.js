import React from 'react'
import EmployeeCell from './EmployeeCell'

const EmployeeList = ({ filteredEmployees, actions, employeeType, visibilityFilter }) => (
    <div className="column-flexbox">
        <h3>{visibilityFilter} { employeeType }</h3>
        <div className="borderedList">
            <ul>
                {filteredEmployees.map(employee =>
                    <EmployeeCell key={employee.index} employee={employee} {...actions}></EmployeeCell>
                )}
            </ul>
        </div>
    </div>
)

export default EmployeeList
