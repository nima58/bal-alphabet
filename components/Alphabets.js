import React from 'react';
import { View, StyleSheet } from 'react-native';
import AlphabetMap from './AlphabetMap';
import AlphabetsTable from './AlphabetsTable';
import PageHeader from './PageHeader';
import * as Font from 'expo-font';

class Alphabets extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            words: [],
            colSize: 5
        }
        this.nextPage = this.nextPage.bind(this);
        this._onPress = this._onPress.bind(this);
        this.toSettings = this.toSettings.bind(this);
        console.log("ColSize: " + this.state.colSize);
    }

    async componentDidMount() {
        console.log("Navigation: " + JSON.stringify(this.props.navigation));
        this.setState({ words: AlphabetMap.words });
        await Font.loadAsync({
            'lucida-console': require('../assets/fonts/lucida-console.ttf'),
          });
          console.log("Lucida console font uploaded!")
    }

    nextPage = (latin) =>{
        console.log(JSON.stringify(latin));
        let index = this.state.words.findIndex( x => x.CharEntry.latin === latin);
        console.log("index: " + index);
        if(index === -1){
            console.log("Word not found: " + latin);
            return null;
        }else{
            if(index >= this.state.words.length -1){
                return this.state.words[0].CharEntry;
            }else{
                return this.state.words[index +1].CharEntry;
            }
        }
    }

    toSettings = () => {
        console.log("toSettings ....");
        this.props.navigation.navigate('SettingsScreen');
    }

    _onPress(item) {
        console.log("onPress activated!!! ->  " + JSON.stringify(item));
        this.props.navigation.navigate('CardScreen', { 'CharEntry': item.CharEntry, 'nextPage':this.nextPage });
     }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <PageHeader toSettings={this.toSettings}/>
                </View>
                <View style={styles.container}>
                    <AlphabetsTable colSize={this.state.colSize} _onPress={this._onPress}/>
                </View>
            </View>
            );
    }
}

export default Alphabets;

const styles = StyleSheet.create({
    container: {
        flex: 5,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        width: '95%'
        
    },
    header:{
        flex: 2,
        
    }
});