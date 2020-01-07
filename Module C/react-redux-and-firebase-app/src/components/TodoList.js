import React from 'react';
import { connect } from 'react-redux';
import fire from "./../firebase";
// import store from '../redux/store';

class TodoList extends React.Component {
    state = {
        todos: []
    }
    componentDidMount() {
        // store.subscribe(() => {
        //     let data = store.getState();
        //     this.setState({ todos: data.todos });
        // });
        const starCountRef = fire.database().ref('todos/');
        starCountRef.on('value', snapshot => {
            console.log(snapshot.val());
            var values = snapshot.val();
            this.setState({ todos: Object.values(values) })
        });
    }

    render() {
        // const { todos } = this.props;
        return (
            <div>
                <ul>
                    {
                        this.state.todos.map((d, i) => <li key={i}>{d} <button>remove</button></li>)
                    }
                    {/* {
                        todos.map((d, i) => <li key={i}>{d}</li>)
                    } */}
                </ul>
            </div>
        );
    }
}
export default connect(state => {
    // console.log(state);
    return { todos: state.todos.slice(0) }
}, null)(TodoList);
// export default TodoList;
