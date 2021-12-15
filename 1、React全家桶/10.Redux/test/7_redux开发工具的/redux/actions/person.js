import {ADD_PERSON} from '../constant'

//创建一个人的动作

export const createAddPersonAction = personObj => ({type:ADD_PERSON,data:personObj})