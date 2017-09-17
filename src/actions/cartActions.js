export function addToCart(item) {
  return {
      type: 'ADD',
      item
  };
}

export function removeFromCart(item) {
  return {
      type: 'REMOVE',
      item
  };
}