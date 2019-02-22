import {
    START_SIMULATION,
    PAUSE_SIMULATION,
    TOGGLE_MENU_VISIBILITY
} from '../constants/ActionTypes'

const initialState = {
    elapsedDays: 0,
    isPlaying: true,
    showMenu: window.location.pathname.endsWith("CapitalismX/")
}

export default function simulationState(state = initialState, action) {

    switch (action.type) {
        case START_SIMULATION:
            return { ...state, elapsedDays: state.elapsedDays + 1, isPlaying: true}
        case PAUSE_SIMULATION:
            return { ...state, isPlaying: false}
        case TOGGLE_MENU_VISIBILITY:
            return { ...state, showMenu: !state.showMenu }
        default:
        return state
    }
}
