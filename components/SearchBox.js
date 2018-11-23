import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../styles/global.js';

export default class SearchBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = { textSearch: null };
    }

    clearSearch = () => {
        this.setState({textSearch:null})
    }

    render() {
        return (
            <View style={styles.searchBox}>
                <TextInput placeholder="Search for a movie...." value={this.state.textSearch} style={styles.searchInput} onChangeText={(text)=>this.setState({textSearch:text})}/>
                <TouchableOpacity style={styles.searchBtn} onPress={this.clearSearch}>
                    <Image style={styles.searchBtnImg} source={require('../img/close.png')}/>
                </TouchableOpacity>
            </View>
        );
    }
}