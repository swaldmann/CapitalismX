import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Logistics from '../components/dialogs/production/Logistics'
import {TRUCK_TEMPLATE, WAREHOUSE_TEMPLATE} from '../constants/ProductionConstants'
import {  getTrucks } from '../selectors/products'
import * as Actions from '../actions'

const mapStateToProps = state => {
    return {
        trucks: getTrucks(state),
        truckTemplate: TRUCK_TEMPLATE,
        warehouses: state.warehouses,
        warehouseTemplate: WAREHOUSE_TEMPLATE,
        elapsedDays: state.simulationState.elapsedDays
    }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})

const VisibleLogistics = connect(
    mapStateToProps,
    mapDispatchToProps
)(Logistics)

export default VisibleLogistics
