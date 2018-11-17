import {
    START_CAMPAIGN
} from '../constants/ActionTypes'

import { CAMPAIGNS } from '../constants/MarketingConstants'

const initialCampaigns = CAMPAIGNS

export function campaigns(state = initialCampaigns, action) {
    switch (action.type) {
        case START_CAMPAIGN:
            const addedCampaign = {
                index: 0,
                campaignTemplate: action.campaignTemplate,
                campaignMediaTemplate: action.campaignMediaTemplate
            }
            return [addedCampaign, ...state]
        default:
        return state
    }
}
