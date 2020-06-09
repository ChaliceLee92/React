import { ADD_NUMBER, JIAN_NUMBER} from '../reducers/action-type'

export const counter = (state = 0, action) => {
  switch (action.type) {
    case ADD_NUMBER:
      return state + action.data
    case JIAN_NUMBER:
      return state - action.data
    default:
      return state
  }
}