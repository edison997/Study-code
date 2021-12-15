import React, { Component } from 'react'
import PropTypes from 'prop-types'
//nanoid是生成随机的一个字符串，作为id的唯一标识（还有一个是uuid）
import {nanoid} from 'nanoid'
import './index.css'

console.log(nanoid())
export default class Header extends Component {

    static propTypes= {
        addTodo:PropTypes.func.isRequired
    }

    //绑定在该事件上的值可以直接用event事件
    handlekeyup = (event)=> {
        //结构一下，下面少写点代码
        const {target,keyCode} = event
        
        if(keyCode !==13) return
        console.log(event.target.value)
        if(target.value.trim() === ''){
            alert('输入内容不能为空')

            //加上return终止后面的运行
            return
        }

        const addObj = {id:nanoid(),name:target.value,done:false}
        // 用函数的方式向父亲传递参数
        this.props.addTodo(addObj)

        //输入完成后让输入框清空
        event.target.value = ''
    }
    render() {
        return (
            <div>
                <input onKeyUp={this.handlekeyup} className="search" type="text" placeholder="请输入要添加的内容" />
            </div>
        )
    }
}
