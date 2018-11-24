import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView, Button } from 'react-native';
import { styles } from '../styles/global.js';
import TheMovieDB from '../api/TheMovieDB.js';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return state
}

const APIManager = new TheMovieDB();

class DetailsPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { infos: '', back: 'searchPage' };
        this.getInfosForTheMovie();
    }

    getInfosForTheMovie = async () => {
        try {
            var results = await APIManager.getMovieFromItsID(this.props.idMovie);
        }
        catch (e) {
            console.error(e);
        }
        this.setState({
            infos: results
        });
    }

    backToSearchPage = () => {
        const action = { type: "VIEW_UPDATE", value: { view: this.state.back, idMovie: null } }
        this.props.dispatch(action)
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.details}>
                        <Image style={styles.detailsImg} source={{ uri: 'https://image.tmdb.org/t/p/w500' + this.state.infos.poster_path }}></Image>
                        <Text style={styles.detailsTitle}>{this.state.infos.title}</Text>
                        <FlatList
                            data={this.state.infos.genres}
                            renderItem={({ item }) => <View style={styles.genre}><Text>{item.name}</Text></View>}
                            keyExtractor={(item, index) => index.toString()}
                            horizontal={true}
                        />
                        <Text style={styles.detailsDescription}>
                            {this.state.infos.overview}
                        </Text>
                        <View>
                            <Text style={styles.vote}>{this.state.infos.vote_average}/10</Text>
                        </View>
                    </View>
                </View>
                <Button
                    onPress={this.backToSearchPage}
                    title="Back"
                />
            </ScrollView>
        );
    }
}

export default connect(mapStateToProps)(DetailsPage)