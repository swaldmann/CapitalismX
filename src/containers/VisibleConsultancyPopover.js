import { connect } from 'react-redux'
import ConsultancyPopover from '../components/dialogs/marketing/ConsultancyPopover'

const mapStateToProps = state => {
    return {
        marketResearches: 0//getVisibleMarketResearches(state)
    }
}

const VisibleConsultancyPopover = connect(
    mapStateToProps
)(ConsultancyPopover)

export default VisibleConsultancyPopover
