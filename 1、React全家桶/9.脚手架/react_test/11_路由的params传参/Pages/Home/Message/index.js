import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {

  state = {
    msgArr: [{
      id: 1,
      name: "提示1"
    }, {
      id: 2,
      name: "提示2"
    }, {
      id: 3,
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
            {/* 携带参数 */}
              <Link to={`/home/message/detail/${val.id}/${val.name}`}>{val.name}</Link> 
            </li>
          })
        }
      </ul>
      <hr />
      {/* 声明接收 */}
        <Route path={`/home/message/detail/:id/:name`} component={Detail} />
    </div>
    )
  }
}
