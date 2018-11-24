import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SearchPage from './components/SearchPage';
import DetailsPage from './components/DetailsPage';
import { Provider } from 'react-redux';
import Store from './store/configureStore';
// import { createStackNavigator, createAppContainer } from "react-navigation";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <SearchPage/>
      </Provider>
    );
  }
}

// const AppNavigator = createStackNavigator(
//   {
//     SearchPage: { screen: SearchPage },
//     DetailsPage: { screen: DetailsPage}
//   },
//   {
//     initialRouteName: 'SearchPage',
//     headerMode: 'none'
//   }
// );

