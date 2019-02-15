import { connect } from 'react-redux'
import FinanceCompanySheet from '../components/dialogs/finance/FinanceCompanySheet'

const mapStateToProps = (state, props) => {
    return {
        financials: state.financials
    }
}

const VisibleFinanceCompanySheet = connect(
    mapStateToProps
)(FinanceCompanySheet)

export default VisibleFinanceCompanySheet
