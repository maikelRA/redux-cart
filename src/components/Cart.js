import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as cartActions from '../actions/cartActions';

class Cart extends Component {

  render() {
    //ES6 desctructuring from props
    const { cart, actions} = this.props;
    const cartList = cart.map(( item, index) =>{
      return <div key={index}> 
        {item.name} 
        <button className="button" 
                //This syntax is so we can pass along the item as argument
                onClick={ () => actions.removeFromCart(item)} > 
          Remove 
        </button>
      </div>;
    });
    return (
      <div className="cart">
        <h1>Cart</h1>
        {cartList}
      </div>
    );
  }
}

//Take the state from the store and pass it to the connected container
//now we can reference this.props.products 
function mapStateToProps(state, props) {
    return {
        cart: state.cart
    };
}

//Bind all our actions in 'cartActions.js' to 'this.props.actions'
//so it can be used in the component
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(cartActions, dispatch)
    }
}

//Export a connected component with react-redux 'connect', send along
//your mapped state and dispatch
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
