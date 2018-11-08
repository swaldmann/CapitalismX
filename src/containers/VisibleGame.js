import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions'
import Game from '../Game'
import {  getProductUtilities } from '../selectors/products'
import {  getHiredEmployeeCount } from '../selectors/employees'

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})

const mapStateToProps = (state, props) => {
    console.log(state);
    return {
        showMenu: false,
        netWorth: state.financials.netWorth,// + getProductUtilities(state).reduce((totalUtility, utility) => totalUtility += utility, 0),
        simulationState: state.simulationState,
        numberOfEmployees: getHiredEmployeeCount(state),
        productUtilities: getProductUtilities(state)
    }
}

const VisibleGame = connect(
    mapStateToProps,
    mapDispatchToProps
)(Game)

export default VisibleGame
