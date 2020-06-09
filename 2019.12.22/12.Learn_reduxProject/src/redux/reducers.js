/**
 * 包含N个reducer函数。根据老的state和action返回一个新的state
 */
import { combineReducers } from 'redux'
import { Add_Comment, Del_Comment,receive_Comment} from './action-types';


const initComments = [];

function comments(state = initComments, action) {
  switch (action.type) {
    case Add_Comment:
      return [action.data, ...state];
    case Del_Comment:
      return state.filter((item,index) => index !== action.data)
    case receive_Comment:
      return action.data
    default:
      return state;
  }
}

export default combineReducers({
  comments
})
