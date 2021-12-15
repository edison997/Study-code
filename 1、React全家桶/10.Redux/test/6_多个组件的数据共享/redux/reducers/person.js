import { ADD_PERSON } from "../constant";

const initState = [{id:'1',name:"张三丰",age:108}]

export default function personReducer(preState  = initState,action){


  const {type,data} = action

  switch (type) {
    case ADD_PERSON:
      return [data,...preState]
  
    default:
      return preState
  }
}