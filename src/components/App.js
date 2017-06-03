import React, { Component } from 'react';
import Cart from './Cart';
import Products from './Products';
import './App.css';

//App isn't connected, it just renders the two connected components
class App extends Component {
  render() {   
    return (
      <div className="App">
        <h1>Products</h1>
        <Products/>
        <Cart/>
      </div>
    );
  }
}

export default App;



