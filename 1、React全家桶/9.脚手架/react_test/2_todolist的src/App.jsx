import React, {Component} from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import List from './Components/List'
import './App.css'


//状态在哪里，操作状态的方法就在哪里
export default class App extends Component {
    state = {
        todos: [{
                id: 1,
                name: "锻炼",
                done: true
            },
            {
                id: 2,
                name: "吃饭",
                done: true
            }, {
                id: 3,
                name: "打游戏",
                done: false
            }, {
                id: 4,
                name: "敲代码",
                done: false
            }
        ]
    }


    //接收header传递过来的参数的函数
    addTodo = (addObj)=> {
        const {todos} = this.state

        //这个addObj就header传过来的值
        const newTodos = [addObj,...todos]

        this.setState({todos:newTodos})
    }

    //修改状态的函数
    changeTodo = (id,done)=>{
        const {todos} = this.state

        //这里就是查找现在数组中看是否有相同的值
        const newTodos = todos.map((val) => {
            //如果有id相等的，就返回修改了的done的值回去，没有就返回原来的数据回去
            if(val.id === id) return {...val,done:done};
            else return val
        })

        this.setState({todos:newTodos})
    }


    //删除对应的数据
    deleteTodo = (id) => {
        const {todos} = this.state

        const newTodos = todos.filter((val)=>{
            //返回id不相等到数组里面
            return val.id !== id
        })
         this.setState({todos: newTodos})
    }

    //清除所有完成的
    clearTodo = ()=> {
        const {todos} = this.state

        const newTodos = todos.filter((val)=>{
            return !val.done //val.done !== true
        })

        this.setState({todos: newTodos})
    }

    //全选框
    checkAllTodo = (done) => {
        const {todos} = this.state

        const newTodos = todos.map((val)=>{
            return {...val,done}
        })

        this.setState({todos: newTodos})
    }

    render() {
        //不用结构赋值，下面就要传递用this
        const {todos} = this.state
        return (
            <div className = "container" >
                <Header addTodo={this.addTodo}/>
                <List todos = {todos} changeTodo={this.changeTodo} deleteTodo={this.deleteTodo}/> 
                <Footer  todos = {todos} checkAllTodo={this.checkAllTodo} clearTodo={this.clearTodo} />

            </div>
        )
    }
}