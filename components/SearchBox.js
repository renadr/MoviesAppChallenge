import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { styles } from '../styles/global.js';

export default class SearchBox extends React.Component {
    render() {
        return (
            <View style={styles.searchBox}>
                <TextInput placeholder={"eheh"} style={styles.searchInput}/>
                <View style={styles.searchBtn}></View>
            </View>
        );
    }
}