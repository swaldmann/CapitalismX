import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ProductActions from '../actions'
import ComponentGrid from '../components/dialogs/production/ComponentGrid'
import { PRODUCT_TEMPLATES } from '../constants/ProductionConstants'

const mapStateToProps = (state, props) => {
    return {
        componentTypeTemplates: state.componentTypeTemplates,
        productTemplateIndex: state.currentProductTemplateIndex,
        productTemplate: PRODUCT_TEMPLATES[state.currentProductTemplateIndex],
        elapsedDays: state.simulationState.elapsedDays
    }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ProductActions, dispatch)
})

const VisibleComponentGrid = connect(
    mapStateToProps,
    mapDispatchToProps
)(ComponentGrid)

export default VisibleComponentGrid
