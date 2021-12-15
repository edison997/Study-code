import React from "react"
import ReactDOM from "react-dom"
import App from './App'
import {Provider} from 'react-redux'
import store from './redux/store'

ReactDOM.render(
  //Provider 包裹app组件可以自动检测需要store的容器组件 ， 使用了react-redux还可以不用监听状态变化，自动监听
  <Provider store={store}>
    <App/>
  </Provider>

,document.getElementById('root'))


