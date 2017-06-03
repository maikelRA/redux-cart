import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { Provider } from 'react-redux';
import Store from './store/configureStore';

const store = Store();
const mountPoint = document.getElementById('root')

//Provider makes so that every connected container component
//gets access to the store, you have to create the store based
//on your store configuration the pass it along to the providers
ReactDOM.render(
 <Provider store={store}>
   <App />
 </Provider>,
  mountPoint
);
