import React, { Component } from 'react'
import './index.css'
export default class List extends Component {
    render() {
        const {users,isLoading,isFirst,err} = this.props
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
