import { connect } from 'react-redux'
import MarketResearchesList from '../components/dialogs/marketing/MarketResearchesList'
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

const VisibleMarketResearchesList = connect(
    mapStateToProps,
    mapDispatchToProps
)(MarketResearchesList)

export default VisibleMarketResearchesList
