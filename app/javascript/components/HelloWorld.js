import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

class HelloWorld extends React.Component {
  render () {
    return (
      <Fragment>
        Greetings: {this.props.greeting}
      </Fragment>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};
export default HelloWorld
