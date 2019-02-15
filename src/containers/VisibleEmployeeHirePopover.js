import { connect } from 'react-redux'
import EmployeeHirePopover from '../components/dialogs/hr/EmployeeHirePopover'

const makeMapStateToProps = () => {
    const mapStateToProps = (state, props) => {
        return {
            employeeType: props.employeeType,
        }
    }
    return mapStateToProps
}

const VisibleEmployeeHirePopover = connect(
    makeMapStateToProps
)(EmployeeHirePopover)

export default VisibleEmployeeHirePopover
