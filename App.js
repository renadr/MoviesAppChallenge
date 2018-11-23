import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Card from './components/Card';
import SearchBox from './components/SearchBox';
import { styles } from './styles/global.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SearchBox />
        <ScrollView style={styles.list} horizontal={false} contentContainerStyle={{flexGrow: 1}} style={styles.list}>
          <Card />
          <Card />
          <Card />   
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </ScrollView>
      </View>
    );
  }
}

