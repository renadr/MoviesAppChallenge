import React from 'react';
import { StyleSheet, Dimensions, Platform, NativeModules } from 'react-native';

var width = Dimensions.get('window').width; 
var height = Dimensions.get('window').height;

const { StatusBarManager } = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;

export const styles = StyleSheet.create({
    container: {
        marginTop: STATUSBAR_HEIGHT,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        width: width,
    },
    list: {
        width:width,
        backgroundColor:'blue',
        padding:10,
    },
    card: {
        flexDirection: 'row',
        height: 80,
        alignSelf: 'stretch',
        backgroundColor:'red',
        marginTop: 5,
    },
    cardImg: {
        width: 80, 
        height: 80
    },
    cardTextBox: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginLeft: 10,
    },
    cardTitle: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    cardDescription: {
        fontSize: 11,
    },
    searchBox: {
        height: 70,
        backgroundColor: 'green',
        alignSelf: 'stretch',
        padding:10,
        flexDirection: 'row',
    },
    searchInput: {
        backgroundColor: 'yellow',
        flex: 1,
        fontSize: 18,
        fontWeight: 'bold'
    },
    searchBtn: {
        width: 60,
        backgroundColor: 'red',
        // flex: 1,
    }
  });