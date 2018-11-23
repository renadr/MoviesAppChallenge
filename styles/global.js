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
        width: width,
        padding: 10,
    },
    card: {
        flexDirection: 'row',
        height: 80,
        alignSelf: 'stretch',
        marginTop: 5,
    },
    cardImg: {
        width: 80,
        height: 80,
        borderRadius: 10,
    },
    cardTextBox: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginLeft: 10,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    cardDescription: {
        fontSize: 13,
    },
    searchBox: {
        height: 70,
        alignSelf: 'stretch',
        padding: 10,
        flexDirection: 'row',
    },
    searchInput: {
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: '#F1F1F1',
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 10,
    },
    searchBtn: {
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchBtnImg: {
        height: 20,
        width: 20,
    }
});