import React from 'react';
import { View, ScrollView, FlatList, Text } from 'react-native';
import Card from '../components/Card';
import SearchBox from '../components/SearchBox';
import { styles } from '../styles/global.js';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return state
}

class SearchPage extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {  
        return (
            
            <View style={styles.container}>
                <SearchBox />
                {/* <Text>{this.props.results}</Text> */}
                <ScrollView style={styles.list} horizontal={false} contentContainerStyle={{ flexGrow: 1 }} style={styles.list}>
                    <FlatList
                        data={this.props.newResults.results}
                        renderItem={({ item }) => <Card data={item} />}
                        keyExtractor={(item, index) => index.toString()}  
                    />
                </ScrollView>
                
            </View>
        );
    }
}

export default connect(mapStateToProps)(SearchPage)