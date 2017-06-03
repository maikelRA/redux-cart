//Nothing fancy, returns a new object with the type, what will happen: ADD or REMOVE
//And the item that we passed to the function. This gets sent to 'cartReducer'

export const addToCart = (item) => {
  return {
      type: 'ADD',
      item
  };
}

export const removeFromCart = (item) => {
  return {
      type: 'REMOVE',
      item
  };
}