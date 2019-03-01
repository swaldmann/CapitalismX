import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import InvestmentsPopover from '../components/dialogs/finance/InvestmentsPopover'
import * as Actions from '../actions'

const mapStateToProps = (state, props) => {
    return {
        investment: props.investment,
        cash: state.financials.cash
    }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})


const VisibleInvestmentsPopover = connect(
    mapStateToProps,
    mapDispatchToProps
)(InvestmentsPopover)

export default VisibleInvestmentsPopover
