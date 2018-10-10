import React, { Component, Fragment } from 'react'

class Layout extends Component {
  render() {
    return (
      <Fragment >
        <header>
        <a href="#">My App</a>
        <div className="pull-right" style={{float: "right"}}>
          <a href="#">Posts</a>
          <a href="#">Users</a>
        </div>
        </header>
        {this.props.children}
        <footer/>
      </Fragment>
    )
  }
}

export default Layout
