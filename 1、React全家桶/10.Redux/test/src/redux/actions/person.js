import {ADD_PERSON} from '../constant'

//创建一个人的动作

export const addPerson = personObj => ({type:ADD_PERSON,data:personObj})