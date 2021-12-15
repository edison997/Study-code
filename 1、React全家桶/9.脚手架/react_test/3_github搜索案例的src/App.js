import React, { Component } from 'react'
import Search from './Components/Search'
import List from './Components/List'

import './app.css'

export default class App extends Component {

    state = {
        users:[], //users初始值为数组
        isFirst: true, //是否第一次打开页面
        isLoading:false,  //表示是否处于加载中
        err:'' //储存错误信息
    }

    updateAppState = (users) => {

        this.setState(users)
    }
    
    render() {
        
        return (
            <div className='container'>
                <Search updateAppState={this.updateAppState} />
                <List {...this.state} />
            </div>
        )
    }
}

