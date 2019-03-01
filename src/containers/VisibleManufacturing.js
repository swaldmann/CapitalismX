import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Manufacturing from '../components/dialogs/production/Manufacturing'
import {MACHINE_TEMPLATE} from '../constants/ProductionConstants'
import {  getMachines } from '../selectors/products'
import * as Actions from '../actions'

const mapStateToProps = state => {
    return {
        machines: getMachines(state),
        machineTemplate: MACHINE_TEMPLATE,
        elapsedDays: state.simulationState.elapsedDays
    }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})

const VisibleManufacturing = connect(
    mapStateToProps,
    mapDispatchToProps
)(Manufacturing)

export default VisibleManufacturing
