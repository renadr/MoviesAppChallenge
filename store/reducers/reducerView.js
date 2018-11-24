import React from 'react';
import DetailsPage from '../../components/DetailsPage';
import SearchPage from '../../components/SearchPage';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
const initialState = { view: {view:"searchPage", idMovie: null} }

export default function reducerView(state = initialState, action) {
    let nextState;
    switch (action.type) {
        case "VIEW_UPDATE":
            nextState = {
                ...state,
                view: action.value
            }  
            return nextState || state; 
            break;
        default:
            return state;
    }
  }