import { connect } from 'react-redux'
import PressReleasesList from '../components/dialogs/marketing/PressReleasesList'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions'
import { getVisiblePressReleases } from '../selectors/marketing.js'

const mapStateToProps = state => {
    return {
        pressReleases: getVisiblePressReleases(state)
    }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})

const VisiblePressReleasesList = connect(
    mapStateToProps,
    mapDispatchToProps
)(PressReleasesList)

export default VisiblePressReleasesList
