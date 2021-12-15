import React, { Component } from 'react'
// import qs from 'querystring'

const detailArr = [
  {id:"1",content:"今天天气正好"},
  {id:"2",content:"好想吃好吃的"},
  {id:"3",content:"wuwuwu"}
]
export default class Detail extends Component {
  render() {
    //携带params的参数
    // console.log(this.props.match.params)
    // const {id,name} = this.props.match.params

    //携带search的参数
    // console.log(this.props)
    // const {search} = this.props.location
    // const {id,name} =  qs.parse(search.slice(1))

  
   //携带state参数
    const {id,name} = this.props.location.state || {}  //
    console.log(id)
 

    const arr = detailArr.find((item) => {
      console.log(item.id)
      return item.id === id
    }) || {}
    console.log(arr)
   
    
    return (
      <div>
        <ul>
          <li>id：{id}</li>
          <li>title：{name}</li>
          <li>content：{arr.content}</li>
        </ul>
      </div>
    )
  }
}
