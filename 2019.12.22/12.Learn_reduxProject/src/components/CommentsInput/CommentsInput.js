import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CommentsInput.css';

export default class CommentsInput extends Component {
  // 验证接受的数据类型
  static propTypes = {
    commentsAdd: PropTypes.func.isRequired,
  };

  state = {
    userName: '',
    content: '',
  };

  // 提交按钮
  handleSubmit = () => {
    // 收集用户输入的数据
    const comment = this.state
    this.props.commentsAdd(comment)

    // 清除输入框
    this.setState({
      userName:'',
      content:''
    })
  };

  handleNameChange = (e) => {
    const userName = e.target.value
    this.setState({ userName })
  }
  handleConChange = (e) => {
    this.setState({
      content:e.target.value
    })
  }


  render() {
    return (
      <div className="CommentsInput">
        <div>
          <div>用户名</div>
          <input
            className="inputvalue"
            value={this.state.userName}
            onChange={this.handleNameChange}
            type="text"
          />
          <div>评论内容</div>
          <input
            value={this.state.content}
            onChange={this.handleConChange}
            type="text"
            placeholder="请输入评论内容"
          />
          <div>
            <button onClick={this.handleSubmit}>提交</button>
          </div>
        </div>
      </div>
    );
  }
}
// // 验证接受的数据类型
// CommentsInput.propTypes = {
//   commentsAdd:PropTypes.func.isRequired,
// }
