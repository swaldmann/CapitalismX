import React from 'react'

import VisibleConsultancyPopover from '../../../containers/VisibleConsultancyPopover'

const ConsultancyPanel = ({hiredConsultancy, actions}) => (
    <div className="panelItem">
        <h4>Management Consultancy</h4>
        <div className="description">
            A management consulting firm can help you make important decisions and uncover mistakes that happen in your company.<br />
            <div className="choosableItem">
                <div><b>Currently employing</b></div>
                {hiredConsultancy && <img className="icon" src={require('../../../static/icons/' + hiredConsultancy.iconPath)} alt="" />}
                {hiredConsultancy ? hiredConsultancy.title : "No Consultancy"}
            </div>
            <VisibleConsultancyPopover />
        </div>
    </div>
)

export default ConsultancyPanel
