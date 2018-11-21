import { connect } from 'react-redux'
import CampaignMediaTooltip from '../components/dialogs/marketing/CampaignMediaTooltip'
import * as MarketingActions from '../actions'
import { bindActionCreators } from 'redux'

const mapStateToProps = (state, props) => {
    return {
        campaignTemplate: props.campaignTemplate,
        elapsedDays: state.simulationState.elapsedDays
    }
}

const mapDispatchToProps = dispatch => ({
    campaignMediaActions: bindActionCreators(MarketingActions, dispatch)
})

const VisibleCampaignMediaTooltip = connect(
    mapStateToProps,
    mapDispatchToProps
)(CampaignMediaTooltip)

export default VisibleCampaignMediaTooltip
