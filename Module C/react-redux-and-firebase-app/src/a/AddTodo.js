
import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from './../redux/actions'

class AddTodo extends React.Component {
  // ...
  state = {
    input: ''
  }
  addTodo = () => {
    // dispatches actions to add todo
    this.props.addTodo(this.state.input)

    // sets state back to empty string
    this.setState({ input: '' })
  }
  updateInput(val) {
    this.setState({ input: val })
  }
  render() {
    return (
      <div>
        <input
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <button className="add-todo" onClick={this.addTodo}>
          Add Todo
        </button>
      </div>
    )
  }
}

export default connect(
  null,
  { addTodo }
)(AddTodo)