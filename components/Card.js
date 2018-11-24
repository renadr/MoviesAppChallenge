import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { styles } from '../styles/global.js';
import { connect } from 'react-redux';
import DetailsPage from './DetailsPage.js';

const mapStateToProps = (state) => {
  return state
}

class Card extends React.Component {

  constructor(props) {
    super(props);
    this.state = { view: "detailsPage" };
  }

  goToInfosPage = () => {
    const action = { type: "VIEW_UPDATE", value: {view: this.state.view, idMovie:this.props.data.id} }
    this.props.dispatch(action)
  }


  render() {
    return (
      <TouchableOpacity onPress={() => this.goToInfosPage()}>
        <View style={styles.card}>
          <View>
            <Image style={styles.cardImg} source={{ uri: 'https://image.tmdb.org/t/p/w500' + this.props.data.poster_path }} />
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

export default connect(mapStateToProps)(Card)