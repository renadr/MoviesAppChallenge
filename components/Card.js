import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { styles } from '../styles/global.js';

export default class Card extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
      );
    }
  }