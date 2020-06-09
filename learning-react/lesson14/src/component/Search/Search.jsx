import React, { Component } from 'react';
import './Search.css';
import pubsub from 'pubsub-js'

export default class Search extends Component {

  state = {
    userName: ''
  }
  handleChange = (e) => {
    this.setState({
      userName:e.target.value.trim()
    })
  }
  handleSearchClick = () => {
    if(this.state.userName){
      pubsub.publish('Mysearch',this.state.userName)
      this.setState({
        userName:''
      })
    }else{
      alert('输入框不能为空...')
    }
  }

  componentDidMount(){
    pubsub.subscribe('MyTestFun',(msg,MyTestFun) => {
      MyTestFun()   // 测试传递函数
    })
  }

  render() {
    return (
      <div className="Search">
        <div>
          <input
            onChange={this.handleChange}
            value={this.state.userName}
            type="text"
            placeholder="请输入用户名..."
          />
          <button onClick={this.handleSearchClick}>搜 索</button>
        </div>
      </div>
    );
  }
}
