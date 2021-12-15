import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'
import './index.css'

export default class List extends Component {

    // 类型的限制
    static propTypes = {
        todos:PropTypes.array.isRequired,
        changeTodo:PropTypes.func.isRequired
    }
    // 接收父组件的值，都用props
    render() {
        console.log(this.props.todos)
        //从父组件拿到方法在传给子组件
        const {todos,changeTodo,deleteTodo} = this.props
        return (
            <div>
                <div className='list'>
                    {
                    todos.map((todo)=>{
                        {/* console.log(todo) */}
                        return <Item key={todo.id} {...todo} changeTodo={changeTodo} deleteTodo={deleteTodo} />
                    }) 
                    }
                    
                </div>
            </div>
        )
    }
}
