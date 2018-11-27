import React from 'react'

import VisibleLobbyistPopover from '../../../containers/VisibleLobbyistPopover'

const LobbyistPanel = ({hiredLobbyist, actions}) => (
    <div className="panelItem">
        <h4>Lobbying</h4>
        <p className="description">
            A lobbyist can assert its influence over the government, thereby mitigating its impact on the company or achieving benefits.<br />
            <div className="choosableItem">
                <div><b>Currently employing</b></div>
                {hiredLobbyist && <img className="icon" src={require('../../../static/icons/' + hiredLobbyist.iconPath)} alt="" />}
                {hiredLobbyist ? hiredLobbyist.title : "No Lobbyist"}
            </div>
            <VisibleLobbyistPopover />
        </p>
    </div>
)

export default LobbyistPanel
