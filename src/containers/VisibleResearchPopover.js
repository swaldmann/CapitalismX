import { connect } from 'react-redux'
import ResearchPopover from '../components/dialogs/marketing/ResearchPopover'

const mapStateToProps = state => {
    return {
        research: state.marketResearch
    }
}

const VisibleResearchPopover = connect(
    mapStateToProps
)(ResearchPopover)

export default VisibleResearchPopover
