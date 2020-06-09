import React, { Component } from "react";
import logo from "../../logo.svg";
import "./index.css";
import { Route, Redirect, Switch } from "react-router-dom";
import About from "../../views/About/index";
import Home from "../../views/Home/index";
import MyNavLink from '../MyNavlink/index'

export default class App extends Component {
  render() {
    return (
      <div id="App">
        <div className="App_title">
          <h1>React Router</h1>
          <img src={logo} alt="react" />
        </div>
        <div className="App_main">
          <div className="RouteLink">
            <MyNavLink to="/About">About</MyNavLink>
            <MyNavLink to="/Home">Home</MyNavLink>
          </div>
          <div className="RouteViews">
            <Switch>
              <Route path="/About"  component={About} />
              <Route path="/Home" component={Home} />
              <Redirect to='/Home'></Redirect>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
