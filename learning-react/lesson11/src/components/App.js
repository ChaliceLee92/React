import React, { Component } from 'react';
import './App.css';
import logo from '../logo.svg';
import CommentsInput from './CommentsInput/CommentsInput';
import CommentsList from './CommentsList/CommentsList';

export default class App extends Component {
  state = {
    comments: [
      { userName: 'Jack', content: 'react 很好' },
      { userName: 'Tom', content: 'react 太难了' },
    ],
  };

  // 定义方法 往数组添加数据
  commentsAdd = val => {
    const { comments } = this.state;
    comments.unshift(val);
    this.setState({ comments });
  };

  // 删除
  DelComment = index => {
    const { comments } = this.state;
    comments.splice(index, 1);
    this.setState({ comments });
  };

  render() {
    return (
      <div className="App">
        <div className="App_main">
          <h1 className="text">请发表对React的评论</h1>
          <img className="App_img" src={logo} alt="" />
        </div>
        <div className="componentsList">
          <CommentsInput commentsAdd={this.commentsAdd} />
          <CommentsList
            comments={this.state.comments}
            DelComment={this.DelComment}
          />
        </div>
      </div>
    );
  }
}
