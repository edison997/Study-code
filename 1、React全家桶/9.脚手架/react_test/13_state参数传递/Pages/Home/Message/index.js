import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {

  state = {
    msgArr: [{
      id: '1',
      name: "提示1"
    }, {
      id: '2',
      name: "提示2"
    }, {
      id: '3',
      name: "提示3"
    }]
  }
  render() {
    const {msgArr} = this.state
    return (
     <div>
      <ul>
        {
          msgArr.map((val)=>{
            return <li key={val.id}>
              {/* 携带参数params */ }
              {/* <Link to={`/home/message/detail/${val.id}/${val.name}`}>{val.name}</Link>  */}

              {/* 携带参数search  */}
              {/* <Link to={`/home/message/detail/?id=${val.id}&name=${val.name}`}>{val.name}</Link>  */}

              {/* 携带参数state */}
              <Link to={{pathname:'/home/message/detail',state:{id:val.id,name:val.name}}}>{val.name}</Link>
            </li>
          })
        }
      </ul>
      <hr />
      {/* 声明接收params参数 */}
        {/* <Route path={`/home/message/detail/:id/:name`} component={Detail} /> */}

        {/* search参数无需声明接收 ,正常注册就行了*/}
        {/* <Route path='/home/message/detail' component={Detail} /> */}

        {/* state参数无需声明接收 ,正常注册就行了*/}
        <Route path='/home/message/detail' component={Detail} />
    </div>
    )
  }
}
