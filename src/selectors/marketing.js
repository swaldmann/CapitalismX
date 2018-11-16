import { createSelector } from 'reselect'

const getCampaignMediaTypes = state => state.campaignMediaTypes

export const makeGetCampaignMediaTypes = () => {
    return createSelector(
        [getCampaignMediaTypes],
        (campaignMediaTypes) => {
            return campaignMediaTypes
        }
    )
}
