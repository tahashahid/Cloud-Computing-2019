import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// import { Route, Link } from 'react-router-dom';
// import Home from './Home';
// import About from './About';
// import Profile from './Profile';

// import store from './store';
import Item from './item';
import Sidebar from './sidebar';



export default class App extends React.Component {

  state = { counter: 0 };
  componentDidMount() {
    // store.subscribe(() => {
    //   let storeState = store.getState();
    //   this.setState({ counter: storeState.counter });
    // });
  }
  render() {
    return (
      <div className="App">
        {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        {this.state.counter}
        <Route
          exact
          path="/"
          component={items}
        ></Route>
        <Route
          path="/about"
          component={sidebar}
        ></Route>
        <Route
          path="/profile/:name/post/:postId"
          component={Profile}
        ></Route>
         */}
        {/* <AddTodo></AddTodo>
         <TodoList></TodoList> */}
        <Item />
        <Sidebar />
      </div>
    );
  }
}

