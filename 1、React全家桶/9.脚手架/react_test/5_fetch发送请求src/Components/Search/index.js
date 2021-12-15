import React, { Component } from 'react'
import PubSub from 'pubsub-js'
// import axios from 'axios'

export default class Search extends Component {
    
    search = async() => {

        //连续结构赋值+重命名
        const {keywordElement:{value:keyword}} = this
      

        //在这边发布消息，另一个兄弟组件订阅消息，就可以实现兄弟组件之间的数据传递
        PubSub.publish("msg",{isFirst:false,isLoading:true})


        //发送请求（axios）
        // axios.get(`https://api.github.com/search/users?q=${keyword}`).then(
        //     response => {
        //         PubSub.publish('msg',{isLoading:false,users:response.data.items})
        //         console.log("成功了",response.data)
        //     },
        //     error => {
        //         //react页面不能直接展示对象，只能中展示他的属性  
        //         PubSub.publish('msg',{isLoading:false,err:error.message})
        //         console.log("失败了",error)
        //     }
        // )


        //用fetch发送请求（未优化）
        // fetch(`https://api.github.com/search/users?q=${keyword}`).then(
        //     response => {
        //         console.log('联系成功')
        //         return response.json()
        //     },
        //     error => {
        //         console.log("失败了",error)
        //         return new Promise()
        //     }
        // ).then(
        //     response => {
        //         console.log("数据获取成功",response)
        //     },
        //     error => {
        //         console.log("数据获取失败",error)
        //     }
        // )




        // 优化的fetch发送请求
            try {
                const response = await fetch(`https://api.github.com/search/users?q=${keyword}`)
                const data = await response.json()
                 PubSub.publish('msg',{isLoading:false,users:data.items})
                
            } catch (error) {
                console.log("请求出错",error)
                 PubSub.publish('msg',{isLoading:false,err:error.message})
            }



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
