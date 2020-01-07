import React from 'react';
import store from './newstore'

export default class Sidebar extends React.Component {
  state = {
    list: []
  }

  componentDidMount() {
    store.subscribe(() => {
      let storeState = store.getState();
      this.setState({ list: storeState });
    });
  }

  render() {

    return (
      <div className="sidebar">
        <h1>sidebar</h1>
        <ul>
          {this.state.list.map((value, index) => <li key={index} >{value} <button
          >remove</button></li>)}
        </ul>

      </div>
    );
  }
}

