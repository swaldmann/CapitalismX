import React from 'react'

import VisibleLogisticPartnerPopover from '../../../containers/VisibleLogisticPartnerPopover'

const LogisticPartnerPanel = ({hiredLogisticPartner, actions}) => (
    <div className="panelItem">
        <h4>Logistic Partner</h4>
        <div className="description">
            The logistic partner delivers all products which can't be delivered by the truck fleet.<br />
            <div className="choosableItem">
                <div><b>Currently employing</b></div>
                {hiredLogisticPartner ? hiredLogisticPartner.title : "No Logistic Partner"}
            </div>
            <VisibleLogisticPartnerPopover />
        </div>
    </div>
)

export default LogisticPartnerPanel
