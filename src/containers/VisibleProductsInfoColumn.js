import { connect } from 'react-redux'
import ProductsInfoColumn from '../components/dialogs/production/ProductsInfoColumn'
import { getProductUtilities } from '../selectors/products'

const mapStateToProps = (state, props) => {
    return {
        totalUtilities: getProductUtilities(state),
    }
}

const VisibleProductsInfoColumn = connect(
    mapStateToProps
)(ProductsInfoColumn)

export default VisibleProductsInfoColumn
