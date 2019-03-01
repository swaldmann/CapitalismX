import { connect } from 'react-redux'
import LogisticPartnerPopover from '../components/dialogs/production/LogisticPartnerPopover'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions'

const mapStateToProps = state => {
    return {
        elapsedDays: state.simulationState.elapsedDays
    }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})

const VisibleLogisticPartnerPopover = connect(
    mapStateToProps,
    mapDispatchToProps
)(LogisticPartnerPopover)

export default VisibleLogisticPartnerPopover
