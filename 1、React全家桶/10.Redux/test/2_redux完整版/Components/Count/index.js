import React, { Component } from 'react'

import store from '../../redux/store'
import { incrementAction,decrementAction } from '../../redux/count_action'

export default class Count extends Component {


  // 这个步骤直接在index.js中完成了
  // componentDidMount(){
  //   //监听redux中的状态，改变就会调用这个函数，
  //   store.subscribe(()=>{
  //     // 这里是为了重新渲染render
  //     this.setState({})
  //   })
  // }
 

  increment = ()=> {
    
    const { value } = this.selectNum
    //value*1 转number的简便写法
    // store.dispatch({type:'increment',data:value*1})  //与reducer进行通信，传递参数
    store.dispatch(incrementAction(value*1))
  } 
  decrement = ()=> {
  
    const { value } = this.selectNum
    //value*1 转number的简便写法
    // store.dispatch({type:'increment',data:value*1})
    store.dispatch(decrementAction(value*1))
  }
  incrementIfOdd = ()=> {
    
    const { value } = this.selectNum
    //value*1 转number的简便写法
    if(store.getState() % 2 !== 0){
      // store.dispatch({type:'increment',data:value*1})
      store.dispatch(incrementAction(value*1))
    }
  }
  incrementAsync = ()=> {
    
    const { value } = this.selectNum
    //value*1 转number的简便写法
    setTimeout(() => {
  //     store.dispatch({type:'increment',data:value*1})
        store.dispatch(incrementAction(value*1))
    }, 1000);
  }

  
  
  render() {
    return (
      <div>
        {/* store.getState()获取数据 */}
        <h1>当前求和为：{store.getState()}</h1>
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
