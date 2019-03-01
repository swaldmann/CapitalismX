import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Products from '../components/dialogs/production/Products'
//import {} from '../constants/ProductionConstants'
import {  getProducts } from '../selectors/products'
import * as Actions from '../actions'

const mapStateToProps = state => {
    return {
        products: getProducts(state),
        //(truckTemplate: TRUCK_TEMPLATE,
        elapsedDays: state.simulationState.elapsedDays
    }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})

const VisibleProducts = connect(
    mapStateToProps,
    mapDispatchToProps
)(Products)

export default VisibleProducts
