import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
 class Header extends Component {

  goback = () => {
    this.props.history.goBack()
  }
  goforward = () => {
    this.props.history.goForward()
  }
  go = () => {
    this.props.history.go(1)
  }

  render() {
    // console.log(this.props)
    return (
      <div>
        <div className="page-header">
        <h2>React Router Demo</h2>
          <button onClick={this.goback}>goback</button>
          <button onClick={this.goforward}>goforward</button>
          <button onClick={this.go}>go</button>
        </div>
      </div>
    )
  }
}

export default withRouter(Header)