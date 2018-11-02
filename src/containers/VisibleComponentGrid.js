import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ProductActions from '../actions'
import ComponentGrid from '../components/dialogs/production/ComponentGrid'
import { makeGetVisibleProducts } from '../selectors/products'

const makeMapStateToProps = () => {
    const getVisibleProducts = makeGetVisibleProducts()
    const mapStateToProps = (state, props) => {
        return {
            products: getVisibleProducts(state, props),
        }
    }
    return mapStateToProps
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ProductActions, dispatch)
})

const VisibleComponentGrid = connect(
    makeMapStateToProps,
    mapDispatchToProps
)(ComponentGrid)

export default VisibleComponentGrid
