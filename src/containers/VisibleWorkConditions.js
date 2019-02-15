import { connect } from 'react-redux'
import WorkConditions from '../components/dialogs/hr/WorkConditions'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions'

const mapStateToProps = state => {
    return {
        workingTimeModel: state.workingTimeModel,
        workingHours: state.workingHours,
        companyCarPolicy: state.companyCarPolicy,
        foodBenefits: state.foodBenefits,
        gymMembership: state.gymMembership
    }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})

const VisibleWorkConditions = connect(
    mapStateToProps,
    mapDispatchToProps
)(WorkConditions)

export default VisibleWorkConditions
