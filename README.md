# redux-shop

## Installation

This repository has a basic setup of `react` + `redux` to get you started. You should be able to `yarn/npm i` and just get started.

```bash
yarn # npm i

```

## Structure

:open_file_folder:  `src`

  &nbsp;&nbsp; L :open_file_folder: `actions` - All our actions (2 actions for the moment)

  &nbsp;&nbsp; L :open_file_folder: `components` - All components

  &nbsp;&nbsp; L :open_file_folder: `reducers` - Our two reducers

  &nbsp;&nbsp; L :open_file_folder: `store`  - Logic to create the store

  &nbsp;&nbsp; L :open_file_folder: `styles` - Styling

  &nbsp;&nbsp; `index.js` - Our entrypoint as usual

## Redux DevTools

This repo also has `Redux DevTools` enabled. Add it to your browser and start it up when you are at the page to enable tracking our your state and time travel debugging.

* [**Chrome: Redux DevTools**](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)

* [**FireFox: RemoteDev**](https://addons.mozilla.org/en-US/firefox/addon/remotedev/)


### `react-redux`

* [**React Redux Connect explained**](http://www.sohamkamani.com/blog/2017/03/31/react-redux-connect-explained/)

`redux` + `react-redux` demands a bit of boilerplate to setup, but the good thing is that the boilerplate is usually always the same and can be copied in most cases. So it will not vary much.

#### Provider
We get a `Provider` component that is in charge of passing the store down to every component in our application

```jsx
/**
 * Provider is in charge of turning our `store` into 
 * `this.props.store` for every component in our application
 * This makes it so we can access the store at any time in any component
 * via the `connect` component
 */
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider> 
    , document.getElementById('root')
);
```

#### `mapStateToProps` & `mapDispatchToProps`

We have two helper function. One to map our actions or action creators to the components `props`.
This simplifies our the way we call our function in every component.

```jsx
/**
 * `mapDispatchToProps` is in charge of converting `store.dispatch` into
 * more easily handled functions. Our 'Provider' component supplies us with
 * the store via `this.props.store`. This is so we can write 'this.props.addToCart'
 * instead of `this.props.store.dispatch({ type: 'ADD', payload: item  })` which
 * is what we are actually saying 
 * @param {Function} dispatch 
 */
function mapDispatchToProps(dispatch){
  return{
    addToCart: todo => dispatch(addToCart(item))
  }
}

```

And one function to map our current redux state: `store.getState()` to the components props `this.props`.

```jsx
/**
 * `mapStateToProps` is a helper function to map our state to `props` and
 * to only expose the state we need. Right now we only have one object in our state: `todos`
 * We are saying: take the current state which is: `this.props.store.getState().cart`
 * and put it in this component props: `this.props.cart`. If we have multiple pieces of our state
 * we can choose here which parts of the state should be exposed to this component
 * @param {Object} state 
 */
function mapStateToProps(state){
  return {
    cart: state.cart
  }
}

```

#### `connect`

To connect to our redux state we use the `connect` function supplied to us by `react-redux` So we directly export a connected component when we `import` our `App` component.

```jsx
/**
 * We then use `connect` and pass along our two helper functions: 
 * `mapStateToProps` and `mapDispatchToProps` to init the connection.
 * Our "third" argument is the component to connect. So notice the double ()()
 * This is a Higher Order Component at work. It takes default values and a Component
 * as parameter and then it returns a new enhanced Component when we import the Component
 */
export default connect(mapStateToProps, mapDispatchToProps)(App);
```