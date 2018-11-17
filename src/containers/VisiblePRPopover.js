import { connect } from 'react-redux'
import PRPopover from '../components/dialogs/marketing/PRPopover'

const mapStateToProps = state => {
    return {
        pressReleases: state.pressReleases
    }
}

const VisiblePRPopover = connect(
    mapStateToProps
)(PRPopover)

export default VisiblePRPopover
