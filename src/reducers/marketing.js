import * as uuid from 'uuid/v4'

import {
    START_CAMPAIGN,
    MAKE_PRESS_RELEASE,
    DO_MARKET_RESEARCHES,
    HIRE_CONSULTANCY,
    HIRE_LOBBYIST
} from '../constants/ActionTypes'

import { MARKETING, CAMPAIGNS, PRESS_RELEASES, MARKET_RESEARCHES } from '../constants/MarketingConstants'

export function marketing(state = MARKETING, action) {
    switch (action.type) {
        case HIRE_CONSULTANCY:
            return { ...state, consultancyIndex: action.consultancyIndex }
        case HIRE_LOBBYIST:
            return { ...state, lobbyistIndex: action.lobbyistIndex }
        default:
            return state
    }
}

export function campaigns(state = CAMPAIGNS, action) {
    switch (action.type) {
        case START_CAMPAIGN:
            const addedCampaign = {
                index: 0,
                uuid: uuid(),
                startElapsedDays: action.startElapsedDays,
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
                startElapsedDays: action.startElapsedDays,
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
                startElapsedDays: action.startElapsedDays,
                marketResearchTemplate: action.marketResearchTemplate
            }
            return [addedMarketResearch, ...state]
        default:
        return state
    }
}
