import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as cartActions from '../actions/cartActions';

class Products extends Component {

  render() {
    //ES6 desctructuring from props
    const { actions, products } = this.props;
    const productList = products.map( (item,index)  => {

      //React needs a key for your children
      return <div key={index}> 
        { item.name } 
        <button className="button"
                //this.props.actions.addToCart from 'mapDispatchToProps' further down
                onClick={() => actions.addToCart(item)}>
          Add To Cart
        </button> 
      </div>
    });

    return (
      <div className= "products">
         { productList }
      </div>
    );
  }
}

//Take the state from the store and pass it to the connected container
//now we can reference this.props.products 
function mapStateToProps(state, props) {
    return {
        products: state.products
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
export default connect(mapStateToProps, mapDispatchToProps)(Products);

