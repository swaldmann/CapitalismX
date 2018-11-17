import {
    START_CAMPAIGN
} from '../constants/ActionTypes'

import { MARKETING, CAMPAIGNS } from '../constants/MarketingConstants'

const initialState = MARKETING

export function marketing(state = initialState, action) {
    /*switch (action.type) {
        case START_CAMPAIGN:
            return {...state, history: state.history.concat(action.addedCampaign)}
        default:
        return state
    }*/
    return state
}

const initialCampaigns = CAMPAIGNS

export function campaigns(state = initialCampaigns, action) {
    switch (action.type) {
        case START_CAMPAIGN:
            const addedCampaign = {
                index: 0,
                campaignTemplate: action.campaignTemplate,
                campaignMediaTemplate: action.campaignMediaTemplate
            }
            return state.concat(addedCampaign)
        default:
        return state
    }
}

export function campaignMediaTypes(state = initialState, action) {
    return state.campaignMedia
}

export function pressReleases(state = initialState, action) {
    return state.pressReleases
}

export function marketResearch(state = initialState, action) {
    return state.marketResearch
}
