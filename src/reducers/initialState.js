/**
 * This is an object that represents the state, it can be a good idea to
 * put it in a separate file so you can reference it easier. It returns the 
 * default products and an empty array as the cart, initialstate for 'cart'
 */
export default {
  cart: [],
  products: [
    {
      id: 1,
      name: "Redux",
      price: 100000
    },
    {
      id: 2,
      name: "React",
      price: 0
    },
    {
      id: 3,
      name: "Redux DevTools",
      price: 10
    }
  ]
}