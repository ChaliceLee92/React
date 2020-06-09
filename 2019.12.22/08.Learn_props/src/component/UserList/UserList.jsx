import React, { Component } from 'react'
import UserListItem from '../UserListItem/UserListItem'
import PropTypes from 'prop-types'
import axios from 'axios'
import './UserList.css'

export default class UserList extends Component {

  static propTypes = {
    userName: PropTypes.string.isRequired,
  }

  state = {
    initUser: true,
    loading: false,
    user: null,
    error: null
  }

  getUserListData = (userName) => {

    this.setState({
      initUser: false,
      loading: true
    })

    const url = `https://api.github.com/search/users?q=${userName}`
    axios.get(url).then(res => {
      const data = res.data.items.map((item, index) => {
        return {
          avatars: item.avatar_url,
          url: item.html_url,
          name: item.login
        }
      })
      this.setState({
        user: data,
        loading: false
      })
    }).catch(error => {
      this.setState({
        error: error.message
      })
    })
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.userName) {
      return {
        userName: nextProps.userName
      }
    }

    return null
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.userName !== this.props.userName) {
      // 做一些需要this.props的事
      this.getUserListData(this.props.userName)
    }
  }


  render() {
    const { initUser, loading, error, user } = this.state
    if (initUser) {
      return (
        <div>请输入搜索关键字...</div>
      )
    } else if (loading) {
      return (
        <h3>Loading...</h3>
      )
    } else if (error) {
      return (
        <div>{error}...</div>
      )
    } else if (user.length !== 0) {
      return (
        <div className='UserList'>
          <UserListItem user={user}></UserListItem>
        </div>
      )
    } else if (initUser === false && user.length === 0) {
      return (
        <div>未找到相关用户哦...</div>
      )
    }
  }
}
