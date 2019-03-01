import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import LogisticPartnerPanel from '../components/dialogs/production/LogisticPartnerPanel'
import {LOGISTIC_PARTNER_TEMPLATES} from '../constants/ProductionConstants'
import * as Actions from '../actions'

const mapStateToProps = state => {
    return {
        hiredLogisticPartner: LOGISTIC_PARTNER_TEMPLATES[state.logisticPartnerIndex]
    }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})

const VisibleLogisticPartnerPanel = connect(
    mapStateToProps,
    mapDispatchToProps
)(LogisticPartnerPanel)

export default VisibleLogisticPartnerPanel
