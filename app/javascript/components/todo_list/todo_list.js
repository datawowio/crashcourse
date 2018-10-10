import React, {
  Component,
  Fragment
} from 'react'
import TodoForm from './form'
import List from './list'

class TodoList extends Component {
  state = {
    todos: []
  }

  render() {
    return (
      <Fragment >
        <TodoForm / >
        <List / >
      </Fragment>
    )
  }
}

export default TodoList
