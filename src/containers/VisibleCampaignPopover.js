import { connect } from 'react-redux'
import CampaignPopover from '../components/dialogs/marketing/CampaignPopover'

const mapStateToProps = state => {
    return {
        campaignMediaTypes: state.campaignMediaTypes
    }
}

const VisibleCampaignPopover = connect(
    mapStateToProps
)(CampaignPopover)

export default VisibleCampaignPopover
