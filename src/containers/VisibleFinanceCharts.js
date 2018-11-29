import { connect } from 'react-redux'
import FinanceCharts from '../components/dialogs/finance/FinanceCharts'

const mapStateToProps = (state, props) => {
    return {
        financialHistory: state.financials.history,
        simulationState: state.simulationState
    }
}

const VisibleFinanceCharts = connect(
    mapStateToProps
)(FinanceCharts)

export default VisibleFinanceCharts
