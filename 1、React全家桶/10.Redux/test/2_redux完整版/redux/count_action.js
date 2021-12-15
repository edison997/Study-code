// 该文件专门为Count组件生成action 

import { INCREMENT,DECREMENT } from "./constant"

export const incrementAction = data => ({type:INCREMENT,data})
export const decrementAction = data => ({type:DECREMENT,data})