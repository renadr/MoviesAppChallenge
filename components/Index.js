import React from 'react';
import { View, ScrollView, FlatList, Text } from 'react-native';
import Card from '../components/Card';
import SearchBox from '../components/SearchBox';
import SearchPage from '../components/SearchPage';
import DetailsPage from '../components/DetailsPage';
import { styles } from '../styles/global.js';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return state
}

class Index extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {  
        searchPage = <SearchPage/>
        detailsPage = <DetailsPage idMovie={this.props.reducerView.view.idMovie}/>
        return (
            <View style={{flex: 1,}}>
                {this.props.reducerView.view.view == "searchPage" ? searchPage : detailsPage}
            </View>
        );
    }
}

export default connect(mapStateToProps)(Index)