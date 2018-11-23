import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import { styles } from '../styles/global.js';

export default class Card extends React.Component {
    render() {
      return (
          <TouchableHighlight onPress={this.onPress}>
            <View style={styles.card}>
              <View>
                <Image style={styles.cardImg} source={{uri: 'https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2012/11/movie_theater_interior_a_l.jpg'}}/>
              </View>
              <View style={styles.cardTextBox}>
                <Text style={styles.cardTitle}>The Social Network</Text>
                <Text style={styles.cardDescription}>Some details here</Text>
              </View>
            </View>
          </TouchableHighlight>
      );
    }
  }