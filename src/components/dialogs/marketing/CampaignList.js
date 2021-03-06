import React from 'react'
import VisibleCampaignPopover from '../../../containers/VisibleCampaignPopover'

const CampaignList = ({ campaigns, elapsedDays }) => (
    <div className="third column-flexbox">
        <h3>Campaigns</h3>
        <div className="borderedList remaining-size">
            <ul>
                {
                    campaigns.map(campaign =>
                        <li key={campaign.uuid}>
                            <img className="icon" alt="" src={require('../../../static/icons/' + campaign.campaignMediaTemplate.iconPath)} />{campaign.campaignTemplate.name}
                            <div className="detailTitle">{elapsedDays >= campaign.startElapsedDays + 5 ? (elapsedDays - campaign.startElapsedDays) + " days ago" : "Underway"}</div>
                        </li>
                    )
                }
            </ul>
        </div>
        <VisibleCampaignPopover />
    </div>
)

export default CampaignList
