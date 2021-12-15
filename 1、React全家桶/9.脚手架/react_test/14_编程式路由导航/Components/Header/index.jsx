import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

 class Header extends Component {
  
  render() {
    // console.log(this.props)
    return (
      <div>
        <div className="page-header">
          <h2>React Router Demo</h2>
          
          
        </div>
      </div>
    )
  }
}

export default withRouter(Header)
