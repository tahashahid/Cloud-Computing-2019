import React from 'react';

import axios from 'axios';
import store from './store'
// window.counter = 0;

export default class Home extends React.Component {
  state = { counter: 0 }
  componentDidMount() {
    // GET '/employees'  //Get all employees
    // GET '/emloyee/:id' //get single employee by id
    // POST '/employees'
    // POST '/employees/:id' //for update
    // POST '/employees/delete/:id'
    // POST '/employees/:id/delete'

    // GET '/employees'
    // GET '/employees/:id'
    // POST '/employees'
    // PUT '/employees/:id'
    // DELETE '/employees/:id'

    // axios.get('https://jsonplaceholder.typicode.com/posts/101')
    // .then((response) => {
    //     console.log(response);
    // })
    // axios.post('https://jsonplaceholder.typicode.com/posts', {
    //     body: "my post",
    //     title: "this is my post",
    //     userId: 5
    // })
    // .then((response) => {
    //     console.log(response);
    // })
    // axios.put('https://jsonplaceholder.typicode.com/posts/42', {
    //     body: "my post",
    //     title: "this is my post",
    //     userId: 5
    // })
    // .then((response) => {
    //     console.log(response);
    // })
    // 


  }
  // add = () => {
  // this.setState({counter: 1});
  // window.counter = 1;
  // }
  inc = () => store.dispatch({ type: 'INCREMENT', by: 2 });
  dec = () => store.dispatch({ type: 'DECREMENT' });
  render() {
    return (
      <div className="home">
        <h1>Home</h1>
        {this.state.counter}
        {/* <button onClick={this.add}>add</button> */}
        <button onClick={this.inc}>inc</button>
        <br></br>
        <button onClick={this.dec}>dec</button>
      </div>
    );
  }
}

