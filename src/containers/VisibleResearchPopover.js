import { connect } from 'react-redux'
import ResearchPopover from '../components/dialogs/marketing/ResearchPopover'

const mapStateToProps = state => {
    return {
        marketResearches: state.marketResearches
    }
}

const VisibleResearchPopover = connect(
    mapStateToProps
)(ResearchPopover)

export default VisibleResearchPopover
