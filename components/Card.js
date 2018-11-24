import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { styles } from '../styles/global.js';

export default class Card extends React.Component {

  constructor(props) {
    super(props)
  }

  test = () => {

  } 

  render() {
    return (
      <TouchableOpacity onPress={() => this.test()}>
        <View style={styles.card}>
          <View>
            <Image style={styles.cardImg} source={{ uri: 'https://image.tmdb.org/t/p/w500'+this.props.data.poster_path }} />
          </View>
          <View style={styles.cardTextBox}>
            <Text style={styles.cardTitle}>{this.props.data.title}</Text>
            <Text style={styles.cardDescription}>{this.props.data.vote_average} / 10</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}