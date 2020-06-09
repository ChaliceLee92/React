import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class Counter extends Component {

  static propTypes = {
    count:PropTypes.number.isRequired,
    addNumber:PropTypes.func.isRequired,
    jianNumber:PropTypes.func.isRequired,
    addNumberAsync:PropTypes.func.isRequired,
  }

  state = {
    selectNum: 1
  }

  addNumber = () => {
    this.props.addNumber(Number(this.state.selectNum))
  }

  jianNumber = () => {
    this.props.jianNumber(Number(this.state.selectNum))
  }

  addNumberAsync = () => {
    this.props.addNumberAsync(Number(this.state.selectNum))
  }

  ChangeVal = (e) => {
    console.log(e.target.value);
    const selectNum = e.target.value
    this.setState( { selectNum } )
  }

  render() {
    const {count} = this.props
    
    return (
      <div>
        <div>is num {count} </div>
        <select onChange={this.ChangeVal}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.addNumber}>增加</button>
        <button onClick={this.jianNumber}>减少</button>
        <button onClick={this.addNumberAsync}>异步增加</button>
      </div>
    )
  }
}




