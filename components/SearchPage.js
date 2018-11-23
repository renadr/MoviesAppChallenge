import React from 'react';
import { View, ScrollView, FlatList } from 'react-native';
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

    componentDidUpdate() {
        // console.log("componentDidUpdate : ")
        // console.log(this.props.results)
    }

    render() {
        return (
            <View style={styles.container}>
                <SearchBox />
                <ScrollView style={styles.list} horizontal={false} contentContainerStyle={{ flexGrow: 1 }} style={styles.list}>
                    <FlatList
                        data={this.props.results}
                        renderItem={({ item }) => <Card data={item} />}
                        keyExtractor={(item, index) => index}    
                    />
                </ScrollView>
            </View>
        );
    }
}

export default connect(mapStateToProps)(SearchPage)