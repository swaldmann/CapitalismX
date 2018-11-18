import { connect } from 'react-redux'
import MarketResearchesPopover from '../components/dialogs/marketing/MarketResearchesPopover'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions'
import { getVisibleMarketResearches } from '../selectors/marketing.js'

const mapStateToProps = state => {
    return {
        marketResearches: getVisibleMarketResearches(state)
    }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})

const VisibleMarketResearchesPopover = connect(
    mapStateToProps,
    mapDispatchToProps
)(MarketResearchesPopover)

export default VisibleMarketResearchesPopover
