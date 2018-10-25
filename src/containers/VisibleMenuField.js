import { connect } from 'react-redux'
import MenuField from '../components/MenuField'
import { getHiredEmployeeCount } from '../selectors'

const mapStateToProps = (state, props) => {
    return {
        numberOfEmployees: getHiredEmployeeCount(state)
    }
}

const VisibleMenuField = connect(
    mapStateToProps
)(MenuField)

export default VisibleMenuField
