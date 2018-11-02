import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as EmployeeActions from '../actions'
import EmployeeList from '../components/dialogs/tables/EmployeeList'
import { makeGetVisibleEmployees } from '../selectors/employees'

const makeMapStateToProps = () => {
    const getVisibleEmployees = makeGetVisibleEmployees()
    const mapStateToProps = (state, props) => {
        return {
            filteredEmployees: getVisibleEmployees(state, props),
        }
    }
    return mapStateToProps
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(EmployeeActions, dispatch)
})

const VisibleEmployeeList = connect(
    makeMapStateToProps,
    mapDispatchToProps
)(EmployeeList)

export default VisibleEmployeeList
