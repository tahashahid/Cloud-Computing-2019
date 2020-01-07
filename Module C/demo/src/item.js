import React from 'react';
import store from "./newstore"

export default class Item extends React.Component {
  add = (value) => {
    store.dispatch({ type: 'ADD', select: value });

  }
  render() {
    const item = ["ammar", "ziyan", "x", "y", "z"]
    return (
      <div className="item">
        <h1>item</h1>
        <ul>
          {item.map((value, index) => <li key={index} >{value} <button onClick={() => { this.add(value) }}
          >addd</button></li>)}
        </ul>
        <button>Add Item</button>
      </div>
    );
  }

}

