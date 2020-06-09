import React, { Component } from 'react';
import './Search.css';
import PropTypes from 'prop-types'


export default class Search extends Component {

  static propTypes = {
    setSearchName: PropTypes.func.isRequired
  }

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
      this.props.setSearchName(this.state.userName)
      this.setState({
        userName:''
      })
    }else{
      alert('输入框不能为空...')
    }
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
