import {
    START_CAMPAIGN,
    MAKE_PRESS_RELEASE,
    DO_MARKET_RESEARCHES
} from '../constants/ActionTypes'

import { CAMPAIGNS, PRESS_RELEASES, MARKET_RESEARCHES } from '../constants/MarketingConstants'

export function campaigns(state = CAMPAIGNS, action) {
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

export function pressReleases(state = PRESS_RELEASES, action) {
    switch (action.type) {
        case MAKE_PRESS_RELEASE:
            const addedPressRelease = {
                index: 0,
                pressReleaseTemplate: action.pressReleaseTemplate
            }
            return [addedPressRelease, ...state]
        default:
        return state
    }
}

export function marketResearches(state = MARKET_RESEARCHES, action) {
    switch (action.type) {
        case DO_MARKET_RESEARCHES:
            const addedMarketResearch = {
                index: 0,
                marketResearchTemplate: action.marketResearchTemplate
            }
            return [addedMarketResearch, ...state]
        default:
        return state
    }
}
