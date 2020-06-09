import React, { Component } from 'react'
import { Button,Toast } from 'antd-mobile'

export default class App extends Component {

  handleClick = () => {
    Toast.loading("请稍等",3,()=>{
      console.log("123");
    })
  }

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.handleClick}>点击我</Button>
      </div>
    )
  }
}
