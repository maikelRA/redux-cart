import React, { Component } from 'react';
import Products from './Products';
import Cart from './Cart';
import '../styles/App.css';

/**
 * We could choose to connect the App component or not. It depends on what you want to do,
 * in this example we choose to connect the two components below to illustrate how we can connect
 * multiple component to the same store and data. So this component is "regular".
 */
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



