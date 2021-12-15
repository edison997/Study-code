import React, { Component } from 'react'

// 类式组件
 class Demo extends Component {

  state = { count: 0}

  increment = ()=> {
// 1.对象式setState
    const {count} = this.state
    this.setState({ count:count+1},()=>{
      console.log("12行",this.state.count) //输出的是1，因为是在render刷新页面后菜调用的（所以是15行先输出，这个后输出）
    })

    console.log("15行",this.state.count)  //输出的第0


// 2.函数式setStAte

  // this.setState(state => ({count:state.count+1}))
  }



  
  render() {
    return (
      <div>
        <h1>当前页面求和为：{this.state.count}</h1>
        <button onClick={this.increment}>+</button>
      </div>
    )
  }
}





export default Demo