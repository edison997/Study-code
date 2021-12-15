import { ADD_PERSON } from "../constant";

const initState = [{id:'1',name:"张三丰",age:108}]

export default function personReducer(preState  = initState,action){


  const {type,data} = action

  switch (type) {
    case ADD_PERSON:
      // preState.unshift(data)  错误的，导致数组发生改变，就不是纯函数了
      return [data,...preState]
  
    default:
      return preState
  }
}