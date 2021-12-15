import React, { Component } from 'react'

export default class Count extends Component {

  state = {count:0}


  increment = ()=> {
    const { count } = this.state
    const { value } = this.selectNum
    //value*1 转number的简便写法
    this.setState({count:count+value*1})
  } 
  decrement = ()=> {
    const { count } = this.state
    const { value } = this.selectNum
    //value*1 转number的简便写法
    this.setState({count:count-value*1})
  }
  incrementIfOdd = ()=> {
    const { count } = this.state
    const { value } = this.selectNum
    //value*1 转number的简便写法
    if(count % 2 !== 0){
      this.setState({count:count+value*1})
    }
  }
  incrementAsync = ()=> {
    const { count } = this.state
    const { value } = this.selectNum
    //value*1 转number的简便写法
    setTimeout(() => {
      this.setState({count:count+value*1})
    }, 1000);
  }



  add = (methods) => {
    const { count } = this.state
    const { value } = this.selectNum

    if(methods === "increment") {
      this.setState({count:count+value*1})
    }else if (methods === "decrement"){
      this.setState({count:count-value*1})
    }else if (methods === 'incrementIfOdd') {
      if(count % 2 !== 0){
        this.setState({count:count+value*1})
      }
    }else if (methods === 'incrementAsync'){
      setTimeout(() => {
        this.setState({count:count+value*1})
      }, 1000);
    }
  }

  render() {
    return (
      <div>
      <h1>当前求和为：{this.state.count}</h1>
      <select ref={c => this.selectNum = c}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select> &nbsp;

        <button onClick={this.increment}>+</button> &nbsp;
        <button onClick={this.decrement}>-</button> &nbsp;
        <button onClick={this.incrementIfOdd}>和为奇数再加</button> &nbsp;
        <button onClick={this.incrementAsync}>异步添加</button> &nbsp;

        <button onClick={()=> this.add('increment')}>+</button> &nbsp;
        <button onClick={()=> this.add('decrement')}>-</button> &nbsp;
        <button onClick={()=> this.add('incrementIfOdd')}>和为奇数再加</button> &nbsp;
        <button onClick={()=> this.add('incrementAsync')}>异步添加</button> &nbsp;
      </div>
    )
  }
}
