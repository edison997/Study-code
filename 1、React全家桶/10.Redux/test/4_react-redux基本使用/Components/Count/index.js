// 这个是UI组件，存到容器组件里面去
import React, { Component } from 'react'

export default class Count extends Component {
  increment = ()=> {
    const { value } = this.selectNum
    //value*1 转number的简便写法
    // store.dispatch({type:'increment',data:value*1})  //与reducer进行通信，传递参数
    this.props.increment(value*1)
   
  } 
  decrement = ()=> {
  
    const { value } = this.selectNum
    //value*1 转number的简便写法
    // store.dispatch({type:'increment',data:value*1})
    this.props.decrement(value*1)

  }
  incrementIfOdd = ()=> {
    
    const { value } = this.selectNum
    //value*1 转number的简便写法
    this.props.increment(value*1)
   
  }
  incrementAsync = ()=> {
    
    const { value } = this.selectNum
    //value*1 转number的简便写法
  //   setTimeout(() => {
  // //     store.dispatch({type:'increment',data:value*1})
  //       store.dispatch(incrementAction(value*1))
  //   }, 1000);

    this.props.incrementAsync(value*1,1000)

  }

  render() {
    console.log(this.props)
    return (
      <div>
        {/* store.getState()获取数据 */}
        <h1>当前求和为：{this.props.count}</h1>
        <select ref={c => this.selectNum = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select> &nbsp;

        <button onClick={this.increment}>+</button> &nbsp;
        <button onClick={this.decrement}>-</button> &nbsp;
        <button onClick={this.incrementIfOdd}>和为奇数再加</button> &nbsp;
        <button onClick={this.incrementAsync}>异步添加</button> &nbsp;
    
      </div>
    )
  }
}
