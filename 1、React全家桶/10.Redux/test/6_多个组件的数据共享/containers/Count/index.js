//这个是容器组件，渲染也是渲染这个组件

import React, { Component } from 'react'
// 引入action中方法
import { incrementAction,decrementAction,incrementActionAsync } from '../../redux/actions/count'
//引入连接容器和UI 的react-redux
import {connect} from 'react-redux'

//定义UI组件（因为不引用到别的文件 所以不用暴露）
class Count extends Component {
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

        <h1>这是count组件,我是person的总人数的数据{this.props.preson.length}</h1>
        {/* store.getState()获取数据 */}
        <h3>当前求和为：{this.props.count}</h3>
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

//connect第一个括号必须传两个函数作为参数，第一个函数作为状态，第二个函数作为方法

//暴露容器组件
export default connect(
  //映射状态
  state => ({count:state.countReducer,preson:state.personReducer}),  //因为return的一个对象所以要加小括号


  //映射操作状态的方法mapDispatchToProps的一般写法
  // dispatch => ({
  //   increment:data => dispatch(incrementAction(data)),
  //   decrement:data => dispatch(decrementAction(data)),
  //   incrementAsync:(data,time) => dispatch(incrementActionAsync(data,time))
  //   })


  // 简便写法 推荐写法 (只需要写到action这里，react-redux自动去分发操作了)
  {
    increment:incrementAction,
    decrement:decrementAction,
    incrementAsync:incrementActionAsync
  }

)(Count)