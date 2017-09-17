import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cartActions';

class Products extends Component {

  render() {
    const productList = this.props.products.map( (item,index)  => {
      return <div key={index}> 
        <p style={{ color: "#767676"}}>{item.name} - {item.price} $ </p>
        <button className="button"
                onClick={() => this.props.addToCart(item)}>
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

function mapStateToProps(state, props) {
    return {
        products: state.products
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: item => dispatch(addToCart(item))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Products);

