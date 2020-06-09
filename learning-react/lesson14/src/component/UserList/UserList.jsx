import React, { Component } from 'react';
import UserListItem from '../UserListItem/UserListItem';
import axios from 'axios';
import './UserList.css';
import pubsub from 'pubsub-js';

export default class UserList extends Component {
  state = {
    initUser: true,
    loading: false,
    user: null,
    error: null,
  };

  componentDidMount() {
    pubsub.subscribe('Mysearch', (msg, userName) => {
      console.log(userName, '传值');
      this.setState({
        initUser: false,
        loading: true,
      });

      const url = `https://api.github.com/search/users?q=${userName}`;
      axios
        .get(url)
        .then(res => {
          const data = res.data.items.map((item, index) => {
            return {
              avatars: item.avatar_url,
              url: item.html_url,
              name: item.login,
            };
          });
          this.setState({
            user: data,
            loading: false,
          });
        })
        .catch(error => {
          this.setState({
            error: error.message,
          });
        });
    });

    pubsub.publish('MyTestFun',this.MyTestFun)
  }

  MyTestFun(){
    console.log("测试传递函数");
    
  }

  render() {
    const { initUser, loading, error, user } = this.state;
    if (initUser) {
      return <div>请输入搜索关键字...</div>;
    } else if (loading) {
      return <h3>Loading...</h3>;
    } else if (error) {
      return <div>{error}...</div>;
    } else if (user.length !== 0) {
      return (
        <div className="UserList">
          <UserListItem user={user} />
        </div>
      );
    } else if (initUser === false && user.length === 0) {
      return <div>未找到相关用户哦...</div>;
    }
  }
}
