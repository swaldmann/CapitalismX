import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import TrainingPopover from '../components/dialogs/hr/TrainingPopover'
import * as Actions from '../actions'

const mapStateToProps = (state, props) => {
    return {
        employeeIndex: props.employeeIndex
    }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})


const VisibleTrainingPopover = connect(
    mapStateToProps,
    mapDispatchToProps
)(TrainingPopover)

export default VisibleTrainingPopover
