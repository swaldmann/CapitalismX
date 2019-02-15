import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ConsultancyPopover from '../components/dialogs/marketing/ConsultancyPopover'
import * as Actions from '../actions'

const mapStateToProps = state => {
    return {
        hiredConsultancyIndex: state.marketing.consultancyIndex
    }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})

const VisibleConsultancyPopover = connect(
    mapStateToProps,
    mapDispatchToProps
)(ConsultancyPopover)

export default VisibleConsultancyPopover
