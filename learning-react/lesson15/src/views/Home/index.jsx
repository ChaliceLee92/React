import React, { Component } from 'react'
import News from '../../component/news/index'
import Messages from '../../component/messages/index'
import { Route,Redirect,Switch } from 'react-router-dom'
import MyNavLink from '../../component/MyNavlink/index'
 
export default class Home extends Component {
    render() {
        return (
            <div>
                <h3>Home 组件</h3>
                <div>
                  <MyNavLink to='/Home/news'>news</MyNavLink>
                  <MyNavLink to='/Home/messages'>messages</MyNavLink>
                </div>
                <Switch>
                  <Route path='/Home/news' component={News}></Route>
                  <Route path='/Home/messages' component={Messages}></Route>
                  <Redirect to='/Home/news'></Redirect>
                </Switch>
            </div>
        )
    }
}
