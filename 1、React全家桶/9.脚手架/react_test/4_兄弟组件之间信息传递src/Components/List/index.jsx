import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'
export default class List extends Component {

      state = {
          users: [], //users初始值为数组
          isFirst: true, //是否第一次打开页面
          isLoading: false, //表示是否处于加载中
          err: '' //储存错误信息
      }

      componentDidMount() {
        //   订阅消息 ，改变当前的状态，从而修改页面

        // msg 就是发布的名称，然后回调两个参数必须传（msg，data）
          this.token = PubSub.subscribe("msg",(_,data) => {
              this.setState(data)
          })
      }


      componentWillUnmount(){
          PubSub.unsubscribe(this.token)
      }

    render() {
        const {users,isLoading,isFirst,err} = this.state
        return (
            <div className='card'>
                {
                    
                    isFirst ? <h2>欢迎使用，输入关键字。随后点击搜索</h2> :
                    isLoading ? <h2> Loading...</h2> :
                    err ? <h2 style={{color:'red'}}>{err}</h2> :
                    
                    users.map((val) => {
                        return (
                            

                            <div key={val.id} className='cardbox'>
                                <a href={val.html_url} target="blank">
                                    <img src={val.avatar_url} alt="" style={{width:'100px'}}/>
                                </a>
                                <p>{val.login}</p>
                            </div>
                            )
                    })
                }
            </div>
        )
    }
}
