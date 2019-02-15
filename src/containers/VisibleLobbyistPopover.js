import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import LobbyistPopover from '../components/dialogs/marketing/LobbyistPopover'
import * as Actions from '../actions'

const mapStateToProps = state => {
    return {
        hiredLobbyistIndex: state.marketing.hiredLobbyistIndex
    }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})


const VisibleLobbyistPopover = connect(
    mapStateToProps,
    mapDispatchToProps
)(LobbyistPopover)

export default VisibleLobbyistPopover
