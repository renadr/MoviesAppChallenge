import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../styles/global.js';
import TheMovieDB from '../api/TheMovieDB.js';

const APIManager = new TheMovieDB();

export default class SearchBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = { textSearch: null, results: null };
    }

    clearSearch = () => {
        this.setState({textSearch:null});
    }

    changeValueOfInput = (text) => {
        this.setState({
            textSearch: text,
            results: APIManager.findMovies(this.state.textSearch)
        });
    }

    render() {
        return (
            <View style={styles.searchBox}>
                <TextInput placeholder="Search for a movie...." value={this.state.textSearch} style={styles.searchInput} onChangeText={this.changeValueOfInput}/>
                <TouchableOpacity style={styles.searchBtn} onPress={this.clearSearch}>
                    <Image style={styles.searchBtnImg} source={require('../img/close.png')}/>
                </TouchableOpacity>
            </View>
        );
    }
}