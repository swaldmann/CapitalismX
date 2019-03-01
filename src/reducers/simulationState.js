import {
    START_SIMULATION,
    PAUSE_SIMULATION,
    SHOW_MENU,
    HIDE_MENU
} from '../constants/ActionTypes'

function initialState() {
    return {
        elapsedDays: 0,
        isPlaying: true,
        showMenu: window.location.pathname.endsWith("CapitalismX/")
    }
}

export default function simulationState(state = initialState(), action) {

    switch (action.type) {
        case START_SIMULATION:
            return { ...state, elapsedDays: state.elapsedDays + 1, isPlaying: true}
        case PAUSE_SIMULATION:
            return { ...state, isPlaying: false}
        case SHOW_MENU:
            return { ...state, showMenu: true }
        case HIDE_MENU:
            return { ...state, showMenu: false }
        default:
        return state
    }
}
