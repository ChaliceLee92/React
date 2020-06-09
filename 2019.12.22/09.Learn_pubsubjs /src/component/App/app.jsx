import React, { Component } from 'react';
import './app.css';
import logo from '../../logo.svg';
import Search from '../Search/Search'
import UserList from '../UserList/UserList'

export default class App extends Component {

  render() {
    return (
      <div className='App'>
        <div className='App_main'>
          <div>GitHub 用户搜索</div>
          <img src={logo} alt="React"/>
        </div>
        <div>
          <Search></Search>
          <UserList></UserList>
        </div>
      </div>
    )
  }
}
