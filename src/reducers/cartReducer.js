import initialState from "./initialState";

/**
 * Takes an empty array as initial state, then like the todo-example: either spreads
 * and adds a new item to the cart array, or removes the object with the specified ID
 */
export default function cart(state = initialState.cart, action) {
  switch (action.type) {
    case "ADD":
      //You can put some of this logic in the action or in the component
      // if that is easier for you. This is just good practice to find stuff in arrays!
      //We can first check if the item already exists by running Array.find
      //This will return an item if the ID is present in the state
      const itemToAdd = state.find(item => item.id === action.item.id);
      //If the item exists map through the state and update the object
      if (itemToAdd) {
        return state.map(item => {
          //Compare to find the object
          return item.id === action.item.id
            ? // take the current quantity and increase by one
              Object.assign({}, action.item, { quantity: itemToAdd.quantity + 1 })
            : item;
        });
      } else {
        //If we don't find the item, add it to the state, also add 1 in quantity
        return [...state, Object.assign({}, action.item, { quantity: 1 })];
      }
    case "REMOVE":
      if (action.item.quantity > 0) {
        return state.map(item => {
          //Compare to find the object
          return item.id === action.item.id
            // take the current quantity and decrease by one
            ? Object.assign({}, action.item, { quantity: action.item.quantity - 1 })
            : item;
        });
      } else {
        //Else do the previous, remove the item from the array
        return state.filter(i => i.id !== action.item.id);
      }
    default:
      return state;
  }
}
