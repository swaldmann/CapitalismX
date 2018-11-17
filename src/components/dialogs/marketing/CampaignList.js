import React from 'react'
import VisibleCampaignPopover from '../../../containers/VisibleCampaignPopover'

const CampaignList = ({ campaigns }) => (
    <div className="third column-flexbox">
        <h3>Campaigns</h3>
        <div className="borderedList remaining-height">
            <ul>
                {
                    campaigns.map(campaign =>
                        <li>
                            <img className="icon" alt="" src={require('../../../static/icons/' + campaign.campaignMediaTemplate.iconPath)} />{campaign.campaignTemplate.name}
                            <div className="detailTitle">30 days ago</div>
                        </li>
                    )
                }
            </ul>
        </div>
        <VisibleCampaignPopover />
    </div>
)

export default CampaignList
