
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions'
import Game from '../Game'
import {  getTotalUsedMachineCapacitiesAfterUpdate } from '../selectors/products'
import {  getHiredEmployeeCount } from '../selectors/employees'

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})

const mapStateToProps = (state, props) => {
    return {
        cash: state.financials.cash,
        simulationState: state.simulationState,
        numberOfEmployees: getHiredEmployeeCount(state),
        totalUsedMachineCapacity: getTotalUsedMachineCapacitiesAfterUpdate(state)
    }
}

const VisibleGame = connect(
    mapStateToProps,
    mapDispatchToProps
)(Game)

export default VisibleGame
