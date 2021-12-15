//该文件专门用于暴露一个store对象，整个应用只有一个store


//引入createStore，专门用于创建store对象 
import {createStore,applyMiddleware} from 'redux';
//引入redux工具
import { composeWithDevTools} from 'redux-devtools-extension'

//applyMiddleware加上thunk 被 dispatch 的 function 会接收 dispatch 作为参数，并且可以异步调用它
import thunk from 'redux-thunk'

//引入汇总之后的reducer
import  reducer from './reducers'


//暴露store
export default createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))