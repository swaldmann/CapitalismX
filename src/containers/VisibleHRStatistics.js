import { connect } from 'react-redux'
import HRStatistics from '../components/dialogs/hr/HRStatistics'

const mapStateToProps = (state, props) => {
    return {
        hrHistory: state.hrHistory,
        elapsedDays: state.simulationState.elapsedDays
    }
}

const VisibleHRStatistics = connect(
    mapStateToProps
)(HRStatistics)

export default VisibleHRStatistics
