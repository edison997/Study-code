import React, { Component } from 'react'
//引入容器组件
import Count from './containers/Count'
//引入redux
import store from './redux/store'

export default class App extends Component {
  render() {
    return (
      <div>
          {/* 渲染容器组件 并且传入store*/}
          <Count store={store}/>
      </div>
    )
  }
}
