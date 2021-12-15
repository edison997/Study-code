//该文件专门用于暴露一个store对象，整个应用只有一个store


//引入createStore，专门用于创建store对象
import {createStore} from 'redux';

//引入服务员 reducer 
import countReducer from './Count_reducers'

//暴露store
export default createStore(countReducer)