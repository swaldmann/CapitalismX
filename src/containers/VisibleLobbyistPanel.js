import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import LobbyistPanel from '../components/dialogs/marketing/LobbyistPanel'
import {LOBBYIST_TEMPLATES} from '../constants/MarketingConstants'
import * as Actions from '../actions'

const mapStateToProps = state => {
    return {
        hiredLobbyist: LOBBYIST_TEMPLATES[state.marketing.lobbyistIndex]
    }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})

const VisibleLobbyistPanel = connect(
    mapStateToProps,
    mapDispatchToProps
)(LobbyistPanel)

export default VisibleLobbyistPanel
