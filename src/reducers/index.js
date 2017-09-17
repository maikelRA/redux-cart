import { combineReducers } from 'redux';
import cart from './cartReducer';
import products from './productsReducer';
import user from './userReducer'; //import the new reducer!

/**
 * If we need more 'slices' of state. If we have both `products` and `cart` in our 
 * redux state, we need to combine these. There is a built in method in redux for this
 * Import your two reducers: cart and products and combine them to ONE state object. Then export it
 * this rootReducer will be imported in 'store/configureStore.js'
 */
const rootReducer = combineReducers({
    cart,
    products,
    user //Remember to add the user reducer to the state!!
});

export default rootReducer;