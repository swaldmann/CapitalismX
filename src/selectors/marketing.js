import { createSelector } from 'reselect'

const getCampaigns = state => state.campaigns

export const getVisibleCampaigns = createSelector(
    [getCampaigns],
    (campaigns) => {
        return campaigns
    }
)
