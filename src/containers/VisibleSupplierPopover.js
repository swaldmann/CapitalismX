import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import SupplierPopover from '../components/dialogs/production/SupplierPopover'
import * as Actions from '../actions'

const mapStateToProps = (state, props) => {
    return {

        componentTypeTemplate: props.componentTypeTemplate,
        component: props.component,
        elapsedDays: state.simulationState.elapsedDays,
        buttonDisabled: props.diabled
    }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})

const VisibleSupplierPopover = connect(
    mapStateToProps,
    mapDispatchToProps
)(SupplierPopover)

export default VisibleSupplierPopover
