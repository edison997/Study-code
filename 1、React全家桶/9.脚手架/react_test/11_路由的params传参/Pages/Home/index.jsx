import React, { Component } from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
import Message from './Message'
import News from './News'
import MyNavLink from '../../Components/MyNavLink'
export default class Home extends Component {
  render() {
    // console.log("我是路由的props",this.props)
    return (
      <div>
          <h2>Home组件内容</h2>
          <div>
            <ul className="nav nav-tabs">
              <li>
                <MyNavLink to="/home/News">News</MyNavLink>
              </li>
              <li>
                <MyNavLink to='/home/Message'>Message</MyNavLink>
              </li>
            </ul>
            <Switch>
              <Route path='/home/News' component={News}></Route>
              <Route path='/home/Message' component={Message}></Route>
              <Redirect to="/home/News" />
            </Switch>
          </div>
      </div>
    )
  }
}
