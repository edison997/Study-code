import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import {connect} from 'react-redux'
import {createAddPersonAction} from '../../redux/actions/person'


//用的是容器组件的变量，不管是方法还是状态
 class Person extends Component {

  addPerson = ()=> {
      const name = this.nameNode.value;
      const age = this.ageNode.value
      const personObj = {id:nanoid(),name,age}
      this.props.addPerson(personObj)

      this.name = ''
      this.age = ''
  }


  render() {
    
    return (
      <div>
        <h1>我说person组件,我是count的数据{this.props.count}</h1>
        <input ref={c => this.nameNode = c} type="text" placeholder="输入名字" />
        <input ref={c => this.ageNode = c} type="text" placeholder="输入年龄" />
        <button onClick={this.addPerson}>添加</button>

        <ul>
          {
            this.props.per.map((val)=>{
              return <li key={val.id}>名字是：{val.name} ---年龄：{val.age} </li>
            })
          }
          
        </ul>

      </div>
    )
  }
}

export default connect(


  // 相当于是状态在以对象的store中保存了，要用就直接拿key的名字就行了
  state => ({per:state.personReducer,count:state.countReducer}),

  {
    // 定义给一个放方法来接收action中的
    addPerson:createAddPersonAction
  }


)(Person)
