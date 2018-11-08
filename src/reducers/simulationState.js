import {
    START_SIMULATION,
    PAUSE_SIMULATION
} from '../constants/ActionTypes'

const initialState = {
    elapsedDays: 0,
    isPlaying: true
}

export default function simulationState(state = initialState, action) {

    switch (action.type) {
        case START_SIMULATION:
            return { ...state, elapsedDays: state.elapsedDays + 1, isPlaying: true}
        case PAUSE_SIMULATION:
            return { ...state, isPlaying: false}
        default:
        return state
    }
}
