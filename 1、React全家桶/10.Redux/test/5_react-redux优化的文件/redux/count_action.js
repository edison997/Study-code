// 该文件专门为Count组件生成action 

import { INCREMENT,DECREMENT } from "./constant"

// 同步action，就是指action的值为Object类型的一般对象
export const incrementAction = data => ({type:INCREMENT,data})
export const decrementAction = data => ({type:DECREMENT,data})

// 异步action，就是指action的值为函数，异步action中一把都会调用同步action，异步action不是必须的

export const incrementActionAsync = (data,time) => {
  return (dispatch)=> {
    setTimeout(()=>{
      dispatch(incrementAction(data))
    },time )
  }
} 