import { connect } from 'react-redux'
import WorkConditions from '../components/dialogs/hr/WorkConditions'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions'

const mapStateToProps = state => {
    return {
        workingTimeModel: state.workingTimeModel
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
