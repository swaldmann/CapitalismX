import { connect } from 'react-redux'
import LobbyistPopover from '../components/dialogs/marketing/LobbyistPopover'

const mapStateToProps = state => {
    return {
        lobbyistTemplates: state.lobbyistTemplates
    }
}

const VisibleLobbyistPopover = connect(
    mapStateToProps
)(LobbyistPopover)

export default VisibleLobbyistPopover
