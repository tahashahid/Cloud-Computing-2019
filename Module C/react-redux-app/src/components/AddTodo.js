import React from 'react';
import fire from "./../firebase";
import { connect } from 'react-redux';
import { add } from "./../redux/actions"
// import store from '../redux/store';

class AddTodo extends React.Component {
    writeUserData() {
        fire.database().ref('todos/').push("Dummy 3");
    }
    render() {
        return (
            <div>
                <button onClick={this.props.add}>click</button>
                <button onClick={this.writeUserData}>add data</button>
            </div>
        );
    }
}

export default connect(null, { add })(AddTodo)

// export default AddTodo;
