import React, { Component } from 'react';
import logo from '../../logo.svg';
import './UserListItem.css';
import PropTypes from 'prop-types';

export default class UserListItem extends Component {
  static propTypes = {
    user: PropTypes.array.isRequired,
  };

  render() {
    return this.props.user.map((item, index) => {
      return (
        <div className="UserListItem" key={index}>
          <div className="itemImg">
            <img src={item.avatars} alt="" />
          </div>
          <div className="userName">
            <a href={item.url}>{item.name}</a>
          </div>
        </div>
      );
    });
  }
}
