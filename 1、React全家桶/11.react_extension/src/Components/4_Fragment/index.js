import React, { Component,Fragment } from 'react'

export default class Demo extends Component {
  render() {
    //就是去掉根标签，有key就用Fragment  没有可以直接用空标签
    return (
      // <Fragment>
      //   11
      // </Fragment>

      <>
      111
      </>
    )
  }
}
