import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ProductActions from '../actions'
import ComponentGrid from '../components/dialogs/production/ComponentGrid'
import { PRODUCT_TEMPLATES } from '../constants/ProductionConstants'
import { getProductUtilities } from '../selectors/products'

const mapStateToProps = (state, props) => {
    return {
        productTemplate: PRODUCT_TEMPLATES[0],
        productUtilities: getProductUtilities(state),
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
