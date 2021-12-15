import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'

export default class Search extends Component {
    
    search = () => {

        //连续结构赋值+重命名
        const {keywordElement:{value:keyword}} = this
      

        //在这边发布消息，另一个兄弟组件订阅消息，就可以实现兄弟组件之间的数据传递
        PubSub.publish("msg",{isFirst:false,isLoading:true})


        //发送请求
        axios.get(`https://api.github.com/search/users?q=${keyword}`).then(
            response => {
                PubSub.publish('msg',{isLoading:false,users:response.data.items})
                console.log("成功了",response.data)
            },
            error => {
                //react页面不能直接展示对象，只能中展示他的属性  
                PubSub.publish('msg',{isLoading:false,err:error.message})
                console.log("失败了",error)
            }
        )
    }
    
    render() {
        return (
            <div>
                <h3>搜索github用户</h3>
                <input ref={c => this.keywordElement = c} type="text"  placeholder='输入关键词点击搜索'/>
                <button onClick={this.search}>搜索</button>
            </div>
        )
    }
}
