import { connect } from 'react-redux'
import FinanceTable from '../components/dialogs/finance/FinanceTable'

const mapStateToProps = (state, props) => {
    return {
        financialHistory: state.financials.history
    }
}

const VisibleFinanceTable = connect(
    mapStateToProps
)(FinanceTable)

export default VisibleFinanceTable
