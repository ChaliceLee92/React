import React, { Component } from 'react';
import './CommentsList.css';
import PropTypes from 'prop-types';

export default class CommentsList extends Component {
  // 验证接受的数据类型
  static propTypes = {
    comments: PropTypes.array.isRequired,
    DelComment: PropTypes.func.isRequired,
  };

  DelCommentItem = index => {
    console.log(this.props.comments[index].userName);

    if (
      window.confirm(`确定删除${this.props.comments[index].userName}的评论吗？`)
    ) {
      this.props.DelComment(index);
    }
  };

  render() {
    const display = this.props.comments.length === 0 ? 'block' : 'none';
    return (
      <div className="CommentsList">
        <h2>评论回复</h2>
        <h3 style={{ display }}>没有更多的评论了哦！！！！</h3>
        <ul>
          {this.props.comments.map((item, index) => {
            return (
              <li key={index}>
                <div>
                  <span>{item.userName} 说：</span>
                  <button onClick={() => this.DelCommentItem(index)}>
                    删除
                  </button>
                </div>
                <div>{item.content}</div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
// 验证接受的数据类型
// CommentsList.propTypes = {
//   comments:PropTypes.array.isRequired,
// }
