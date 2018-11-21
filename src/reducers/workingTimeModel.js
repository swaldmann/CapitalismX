import { SET_WORKING_TIME_MODEL } from '../constants/ActionTypes'
import { WORKING_TIME_MODEL_FIXED } from '../constants/HRConstants'

const workingTimeModel = (state = WORKING_TIME_MODEL_FIXED, action) => {
  switch (action.type) {
    case SET_WORKING_TIME_MODEL:
      return action.newModel
    default:
      return state
  }
}

export default workingTimeModel
