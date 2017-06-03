import { combineReducers } from 'redux';
import cart from './cartReducer';
import products from './productsReducer';

//We have to have a root reducer that takes all our reducers and
//send them along to the store. So these imports from our different
//reducers  becomes 'this.props.cart' and 'this.props.products' 
//in our connected components
const rootReducer = combineReducers({
    cart,
    products,
});

export default rootReducer;