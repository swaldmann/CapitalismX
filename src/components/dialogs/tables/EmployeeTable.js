import React from 'react'
import EmployeeCell from './EmployeeCell'

class EmployeeTable extends React.Component {
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
}

export default EmployeeTable
