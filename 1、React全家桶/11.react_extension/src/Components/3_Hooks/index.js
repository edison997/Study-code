import React, { Component } from 'react'
import ReactDOM from 'react-dom'

//类组件
/*  class Demo extends Component {

  state = { count: 0}
  myRef = React.createRef()



  show = ()=> {
    alert(this.myRef.current.value)
  }

  increment = ()=> {
// 1.对象式setState
    const {count} = this.state

    this.setState({ count:count+1},()=>{
      console.log("12行",this.state.count) //输出的是1，因为是在render刷新页面后菜调用的（所以是15行先输出，这个后输出）
    })

    console.log("15行",this.state.count)  //输出的第0

 

// 2.函数式setStAte

  // this.setState(state => ({count:state.count+1}))
  }
  //写在组件
 unmount = ()=>{
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }
  componentDidMount() {
    this.timer = setInterval(()=>{
      this.setState(state => ({count:state.count+1}))
    },500)
  }
  componentWillUnmount() {
    // 清除定时器，不然卸载了还会执行
    clearInterval(this.timer)
  }
  
  render() {
    return (
      <div>
        <input type="text" ref={this.myRef}/>
        <h1>当前页面求和为：{this.state.count}</h1>
        <button onClick={this.increment}>+</button>
        <button onClick={this.unmount}>卸载</button>
        <button onClick={this.show}>展示</button>
      </div>
    )
  }
}
 */





//函数组件(调用1+n次)
function Demo(){
  // console.log(React.useState)

  const [count,setCount]  = React.useState(0)
  const [name,setName] = React.useState("zs")


  React.useEffect(()=>{
    let timer = setInterval(() => {
      setCount(count => count+1)
    }, 500);

    return ()=>{
      clearInterval(timer)
    }
  },[])

  const myRef = React.useRef()



  function add(){
    // setCount(count+1)
    setCount(count => count+1)
  }

  function changeName(){
    setName("mike")
  }

  function unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }

  function show() {
    alert(myRef.current.value)
  }

  return (
    <div>

      <h1>改名{name}</h1>
      <h1>求和{count}</h1>
      <input type="text" ref={myRef} />
      <button onClick={add}>+</button>
      <button onClick={changeName}>点我</button>
      <button onClick={unmount}>卸载</button>
      <button onClick={show}>show</button>
    </div>
  )
}


export default Demo