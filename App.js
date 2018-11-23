import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Card from './components/Card';
import { styles } from './styles/global.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Card />
        <Card />
        <Card />
      </View>
    );
  }
}

