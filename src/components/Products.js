import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import { signIn, signOut} from '../actions/userActions';
import LoginForm from './LoginForm';

class Products extends Component {

  render() {
    /**
     * this.props.products is populated through the redux store and mapStateToProps
     * this.props.addToCart is added through mapDispatchToProps
     */
    const productList = this.props.products.map( (item,index)  => {
      return <div key={index}> 
        <p style={{ color: "#767676"}}>{item.name} - {item.price} $ </p>
        <button className="button"
                onClick={() => this.props.addToCart(item)}>
          Add To Cart
        </button> 
      </div>
    });

    //LoginForm is malplaced and ugly, but you get the idea! Hopefully... 
    return (
      <div className= "products">
        <LoginForm signIn={this.props.signIn} signOut={this.props.signOut}/>
         { productList }
      </div>
    );
  }
}

/**
 * The user state should really be in for example App.js. The user and the login
 * is not bound to the "Products" component. But I put it here to exemplify that
 * you can have multiple actions that refer to different reducers in the same
 * connected component. Also this is an example of how you can refer to different
 * parts of the state, state.user and state.products for example
 * @param {Object} state 
 */
function mapStateToProps(state) {
    return {
        products: state.products,
        user: state.user
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: item => dispatch(addToCart(item)),
        signIn: user => dispatch(signIn(user)),
        signOut: () => dispatch(signOut())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Products);

