import React, {
  Component,
  Fragment
} from 'react'

class TodoForm extends Component {
  render() {
    return (
      <Fragment >
        <input type = "text"
         placeholder = "Enter sth..." / >
        <button onClick = { (event) => { alert(1) } }> Add </button>
      </Fragment>
    )
  }
}

export default TodoForm
