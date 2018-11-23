import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SearchPage from './components/SearchPage'
import { Provider } from 'react-redux';
import Store from './store/configureStore';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <SearchPage/>
      </Provider>
    );
  }
}

