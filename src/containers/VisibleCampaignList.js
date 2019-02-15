import { connect } from 'react-redux'
import CampaignList from '../components/dialogs/marketing/CampaignList'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions'
import { getVisibleCampaigns } from '../selectors/marketing.js'

const mapStateToProps = state => {
    return {
        campaigns: getVisibleCampaigns(state),
        elapsedDays: state.simulationState.elapsedDays
    }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})

const VisibleCampaignList = connect(
    mapStateToProps,
    mapDispatchToProps
)(CampaignList)

export default VisibleCampaignList
