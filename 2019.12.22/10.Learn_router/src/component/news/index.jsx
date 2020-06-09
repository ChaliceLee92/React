import React, { Component } from 'react'

export default class News extends Component {
  state = {
    data:[
      'one',
      'two',
      'three'
    ]
  }

  render() {
    return (
      <div className='News'>
        <ul>
          {
            this.state.data.map((item,index) => {
              return <li key={index}>{item}</li>
            })
          }
        </ul>
      </div>
    )
  }
}
