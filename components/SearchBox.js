import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../styles/global.js';
import TheMovieDB from '../api/TheMovieDB.js';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return state
  }

const APIManager = new TheMovieDB();


class SearchBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = { textSearch: null, results: null };
    }

    clearSearch = () => {
        this.setState({textSearch:null});
        const action = { type: "REMOVE_DATA", value: null }
        this.props.dispatch(action)
    }

    changeValueOfInput = async (text) => {
        this.setState({
            textSearch: text
        });
        try{
            var results = await APIManager.findMovies(this.state.textSearch);
        }
        catch(e){
            console.error(e);
        }
        this.setState({
            results: results
        });
        const action = { type: "DATA_UPDATE", value: this.state.results }
        this.props.dispatch(action)
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

export default connect(mapStateToProps)(SearchBox)