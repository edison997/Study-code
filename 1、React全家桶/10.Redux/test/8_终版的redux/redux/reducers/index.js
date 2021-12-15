
//用于汇总多个reducer
import { combineReducers } from 'redux'

//引入服务员 reducer 
import count from './count'
import person from './person'


//汇总所有reducers
export default combineReducers({
  count,
  person
})
