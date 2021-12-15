//该文件专门用于暴露一个store对象，整个应用只有一个store


//引入createStore，专门用于创建store对象 
import {createStore,applyMiddleware} from 'redux';

//引入服务员 reducer 
import countReducer from './Count_reducers'

//applyMiddleware加上thunk 被 dispatch 的 function 会接收 dispatch 作为参数，并且可以异步调用它
import thunk from 'redux-thunk'

//暴露store
export default createStore(countReducer,applyMiddleware(thunk))