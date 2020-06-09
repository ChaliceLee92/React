import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import ItemList from '../../component/items/item'
import MyNavLink from '../MyNavlink/index'

export default class Messages extends Component {
  state = {
    data:[]
  }

componentDidMount(){
  setTimeout(() =>{
    const messages = [
      {id:1,messages:'react1'},
      {id:2,messages:'react2'},
      {id:3,messages:'react3'},
    ]
    this.setState({
      data:messages
    })
  },1000)
}

  render() {
    return (
      <div className='messages'>
        <ul>
          {
            this.state.data.map((item,index) => {
              return (
                <li key={index}>
                  {/* <a href={}></a> */}
                  <MyNavLink to={`/Home/messages/ItemList/${item.id}`}>{item.messages}</MyNavLink>
                </li>
              )
            })
          }
        </ul>
        <Route path='/Home/messages/ItemList/:id' component={ItemList}></Route>
      </div>
    )
  }
}
