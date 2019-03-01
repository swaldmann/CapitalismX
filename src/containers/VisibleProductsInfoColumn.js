import { connect } from 'react-redux'
import ProductsInfoColumn from '../components/dialogs/production/ProductsInfoColumn'
import { getProcurementQualities } from '../selectors/products'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions'
import {
    R_AND_D_TEMPLATES,
    SYSTEM_SECURITY_TEMPLATES,
    PROCESS_AUTOMATION_TEMPLATES
} from '../constants/ProductionConstants'

const mapStateToProps = (state, props) => {
    return {
        rAndDTemplates: R_AND_D_TEMPLATES,
        rAndDIndex: state.rAndDIndex,
        systemsSecurityTemplates: SYSTEM_SECURITY_TEMPLATES,
        systemsSecurityIndex: state.systemsSecurityIndex,
        processAutomationTemplates: PROCESS_AUTOMATION_TEMPLATES,
        processAutomationIndex: state.processAutomationIndex,
        totalUtilities: getProcurementQualities(state),
    }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})

const VisibleProductsInfoColumn = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductsInfoColumn)

export default VisibleProductsInfoColumn
