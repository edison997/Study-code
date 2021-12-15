import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

    checkedAll = (event) => {
        this.props.checkAllTodo(event.target.checked)
    }

    clearAll = () => {
        this.props.clearTodo();
    }

    render() {
        const {todos} = this.props
        const total = todos.length

        //reduce,这个方法很重要
        const doneCount = todos.reduce((prev,current)=> prev + (current.done ? 1 : 0),0)
        return (
            <div className='footerBox'>
                <input type="checkbox" onChange={this.checkedAll} checked={doneCount === total && total !==0 ? true : false} />
                <span>完成{doneCount}</span>/<span>总共{total}</span>
                <button className='footerBtn' onClick={this.clearAll}>清除已完成的任务</button>
            </div>
        )
    }
}
