//这个是容器组件，渲染也是渲染这个组件

//引入UI组件
import CountUI from '../../Components/Count'
// 引入action中方法
import { incrementAction,decrementAction,incrementActionAsync } from '../../redux/count_action'
//引入连接容器和UI 的react-redux
import {connect} from 'react-redux'

/* 
  1、mapStateToProps返回的是一个对象
  2、返回的对象分别是为UI组件中props的key：value
  3、传递状态
*/
function mapStateToProps(state) {
  return {count:state}
}


/* 
  1、mapStateToProps返回的是一个对象
  2、返回的对象分别是UI组件中props的key：value
  3、传递方法
 */
function mapDispatchToProps(dispatch) {
  return {increment:data => dispatch(incrementAction(data)),
   decrement:data => dispatch(decrementAction(data)),
   incrementAsync:(data,time) => dispatch(incrementActionAsync(data,time))
  }
}

//connect第一个括号必须传两个函数作为参数，第一个函数作为状态，第二个函数作为方法
//暴露的是Count容器组件
export default connect(mapStateToProps,mapDispatchToProps)(CountUI)