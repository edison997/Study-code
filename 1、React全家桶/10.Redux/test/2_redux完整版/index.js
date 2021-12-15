import React from "react"
import ReactDOM from "react-dom"

import store from './redux/store'
import App from './App'

ReactDOM.render(<App/>,document.getElementById('root'))

//监听数据变化，变化后就重新渲染页面
store.subscribe(()=>{
  ReactDOM.render(<App/>,document.getElementById('root'))
})
