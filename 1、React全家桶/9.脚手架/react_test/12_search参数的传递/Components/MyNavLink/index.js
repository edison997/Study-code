import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export default class MyNavLink extends Component {
  render() {
    // const {to,children} = this.props
    return (

      // <NavLink activeClassName="changecolor" className="list-group-item" to={to} children={children} />
      // 简化的写法，有多少属性就可以接多少属性
     <NavLink activeClassName="changecolor" className="list-group-item" {...this.props}/>
    )
  }
}
