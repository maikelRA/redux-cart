import { createStore } from 'redux';
import rootReducer from  '../reducers';

//Takes our reducers and send along to the store, the store
//is all knowing and all powerful and has every state
export default(initialState) => {
    return createStore(
      rootReducer, 
      initialState,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
}

//The last argument is just so you can use the Redux DevTools for Chrome/Firefox, download
//the extension to your browser and see what happens. 
//Chrome:
//https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
//FireFox:
//https://addons.mozilla.org/en-US/firefox/addon/remotedev/