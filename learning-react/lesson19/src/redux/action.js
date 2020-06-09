/**
 * 包含了所有的action creaor 工厂函数
 */

import { Add_Comment, Del_Comment,receive_Comment } from './action-types';

// 添加评论
export const commentsAdd = comment => ({ type: Add_Comment, data: comment });

// 删除评论
export const DelComment = index => ({ type: Del_Comment, data: index });

// 用以触发异步获取的数据的同步函数
const receiveComments = (comment) => ({ type: receive_Comment, data: comment });

// 获取数据
export const GetCommentsAsync = () => {
  return dispatch => {
    setTimeout(() => {
      const initComments = [
        { userName: 'jack', content: 'redux好难啊' }
      ]
      dispatch(receiveComments(initComments))
    }, 2000);
  }
}
