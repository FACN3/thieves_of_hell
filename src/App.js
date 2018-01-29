import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

import Form from './components/Form';
import ItemList from './components/ItemList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  addTodo(text) {
    const addtime = Date.now();
    const newTodo = { text, addtime };
    console.log(newTodo);
    const newState = this.state.items.concat([newTodo]);
    this.setState({ items: newState });
  }

  deleteTodo(id) {
    const newState = this.state.items.filter(item => {
      return item.addtime != id;
    });
    this.setState({ items: newState });
  }

  render() {
    return (
      <div className="container">
        <h3>Welcome</h3>
        <Form addTodo={this.addTodo} />

        <ul className="collection">
          <ItemList deleteTodo={this.deleteTodo} items={this.state.items} />
        </ul>
      </div>
    );
  }
}

export default App;
