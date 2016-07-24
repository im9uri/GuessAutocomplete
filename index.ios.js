//react
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';

//redux
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './js/reducer'

//App
import App from './js/App'

function configureStore() {
  const store = createStore(reducer);
  if (module.hot) {
    module.hot.accept('./js/reducer', () => {
      const nextReducer = require('./js/reducer');
      store.replaceReducer(nextReducer);
   });
  }

  return store;
}

const store = configureStore();

class GuessAutocomplete extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('GuessAutocomplete', () => GuessAutocomplete);
