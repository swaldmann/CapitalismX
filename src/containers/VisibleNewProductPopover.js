import { connect } from 'react-redux'
import NewProductPopover from '../components/dialogs/production/NewProductPopover'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions'
import {PRODUCT_TEMPLATES} from '../constants/ProductionConstants'

const mapStateToProps = state => {
    return {
        productTemplates: PRODUCT_TEMPLATES,
        currentProductTemplateIndex: state.currentProductTemplateIndex,
        elapsedDays: state.simulationState.elapsedDays
    }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})

const VisibleNewProductPopover = connect(
    mapStateToProps,
    mapDispatchToProps
)(NewProductPopover)

export default VisibleNewProductPopover
