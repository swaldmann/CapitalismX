import { connect } from 'react-redux'
import PressReleasesPopover from '../components/dialogs/marketing/PressReleasesPopover'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions'
import { getVisiblePressReleases } from '../selectors/marketing.js'

const mapStateToProps = state => {
    return {
        pressReleases: getVisiblePressReleases(state),
        elapsedDays: state.simulationState.elapsedDays
    }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})

const VisiblePressReleasesPopover = connect(
    mapStateToProps,
    mapDispatchToProps
)(PressReleasesPopover)

export default VisiblePressReleasesPopover
