import React from 'react'
// ...other imports
import { connect } from "react-redux";

class TodoList extends React.Component{
    // state = { todos: []}
    // constructor (props) {
    //     super(props)
    //     this.props.todos = []
    // }
    click = () => {
        console.log(this.props)
    }
    render(){
        const { todos } = this.props;
        return (<div>
            <ul>
            {todos.map(x => <li key={x.id}>
                {x.content}
            </li>)}
            </ul>
            <button onClick={this.click}>click</button>
        </div>)
    }
}

const mapStateToProps = state => {
    // console.log(state);
    // return state;
//   const { byIds, allIds } = state.todos || {};
//   const todos =
//     allIds && allIds.length
//       ? allIds.map(id => (byIds ? { ...byIds[id], id } : null))
//       : null;
  return { todos: state.todos.slice(0) };
};

export default connect(mapStateToProps, null)(TodoList);