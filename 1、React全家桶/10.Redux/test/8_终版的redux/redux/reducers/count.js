// 2。reducer函数会接到两个参数，分别为：之前状态（preState），动作对象（action）

import { INCREMENT,DECREMENT } from "../constant"

const initState = 0  //初始化状态 

export default function countReducer(preState=initState,action){

  console.log(preState,action)

  // 从action对象中获取type和data
  const {type,data} = action

  //根据就type值 判定数据加工方法
  switch (type) {
    case INCREMENT :
      return preState+data
    case DECREMENT :
      return preState-data 
    default:
      return preState   
  }
}
