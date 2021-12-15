import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

    //表示鼠标移除
    state = {mouse:false}

    //在下面的函数里面加上括号就是调用函数，我们就要使用高阶函数，return一个函数出来
    handleMouse = (flag)=> {
        return ()=>{
            // console.log(flag)
            this.setState({mouse:flag})
        } 
    }

    //获取点击状态的函数
    handleChange = (id)=> {
        return (event) => {
            //拿到选定状态
            console.log(event.target.checked)
            //接收到父组件传来的函数，并传参数回去
            this.props.changeTodo(id, event.target.checked)
        }

        
    }

    //不使用高阶函数
    handleDelete = (id)=> {
        console.log(id)
        //调用祖先组件的函数
        
        if(window.confirm('提示:确定删除吗')){
            this.props.deleteTodo(id)
        }
    }

    render() {

        const {id,name,done} = this.props
        const {mouse} = this.state
        return (
                
                <div className = 'item' style={{backgroundColor:mouse?"#ddd":"white"}} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
                
                    <input type="checkbox" checked={done} onChange={this.handleChange(id)}/>
                    <span>{name}</span>
                    <button className = "itemBtn" style = {{display: mouse ? 'block' : 'none'}}  onClick = {() => {this.handleDelete(id)}} > 删除
                    </button>
                </div>
            
        )
    }
}
