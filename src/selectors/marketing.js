import { createSelector } from 'reselect'

const getCampaigns = state => state.campaigns
const getMarketResearches = state => state.marketResearches
const getPressReleases = state => state.pressReleases

export const getVisibleCampaigns = createSelector(
    [getCampaigns],
    (campaigns) => {
        return campaigns
    }
)

export const getVisiblePressReleases = createSelector(
    [getPressReleases],
    (pressReleases) => {
        return pressReleases
    }
)

export const getVisibleMarketResearches = createSelector(
    [getMarketResearches],
    (marketResearches) => {
        return marketResearches
    }
)
