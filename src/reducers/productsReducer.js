import initialState from './initialState';

//Just returns the default products so we have something to work on
//this could also call an API and get an array of products
export default(state = initialState.products, action) => {
     return state;
};