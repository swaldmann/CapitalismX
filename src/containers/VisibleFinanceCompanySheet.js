import { connect } from 'react-redux'
import FinanceCompanySheet from '../components/dialogs/finance/FinanceCompanySheet'

const mapStateToProps = (state, props) => {
    return {
        financials: state.financials,
        investments: state.investments
    }
}

const VisibleFinanceCompanySheet = connect(
    mapStateToProps
)(FinanceCompanySheet)

export default VisibleFinanceCompanySheet
