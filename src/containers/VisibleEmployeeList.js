import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as EmployeeActions from '../actions'
import EmployeeList from '../components/dialogs/tables/EmployeeList'
import { getVisibleEmployees } from '../selectors'

const mapStateToProps = state => ({
    filteredEmployees: getVisibleEmployees(state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(EmployeeActions, dispatch)
})

const VisibleEmployeeList = connect(
    mapStateToProps,
    mapDispatchToProps
)(EmployeeList)

export default VisibleEmployeeList
