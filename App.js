import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SearchPage from './components/SearchPage';
import DetailsPage from './components/DetailsPage';
import Index from './components/Index';
import { Provider } from 'react-redux';
import Store from './store/configureStore';

class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <Index/>
      </Provider>
    );
  }
}
export default App
