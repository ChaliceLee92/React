import React, { Component } from 'react'


const data = [
  {id:1 , message:'hello'},
  {id:2 , message:'hello1'},
  {id:3 , message:'hello2'},
]


export default class ItemList extends Component {
  render() {
    let { match : { params: { id } }} = this.props

    let mes = data.find((item) => item.id === id * 1)
    
    return (
      <div>
        <ul>
          <li>{mes.id}</li>
          <li>{mes.message}</li>
        </ul>
      </div>
    )
  }
}
