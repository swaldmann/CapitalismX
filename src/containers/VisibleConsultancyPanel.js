import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ConsultancyPanel from '../components/dialogs/marketing/ConsultancyPanel'
import {CONSULTANCY_TEMPLATES} from '../constants/MarketingConstants'
import * as Actions from '../actions'

const mapStateToProps = state => {
    return {
        hiredConsultancy: CONSULTANCY_TEMPLATES[state.marketing.consultancyIndex]
    }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})

const VisibleConsultancyPanel = connect(
    mapStateToProps,
    mapDispatchToProps
)(ConsultancyPanel)

export default VisibleConsultancyPanel
