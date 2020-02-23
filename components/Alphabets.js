import React from 'react';
import { View, StyleSheet } from 'react-native';
import AlphabetMap from './AlphabetMap';
import AlphabetFlatList from './AlphabetFlatList';
import LangRadioButton from './LangRadioButton';
import PageHeader from './PageHeader';
import * as Font from 'expo-font';

class Alphabets extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            words: AlphabetMap.words,//params.words,
            colSize: 4, 
            language: 0 //baluchi 0, latin 1
        }
        this.nextPage = this.nextPage.bind(this);
        this._onPress = this._onPress.bind(this);
        this.toSettings = this.toSettings.bind(this);
        console.log("Constructor::ColSize: " + this.state.colSize);
    }

    async componentDidMount() {

        let myParams = this.props.navigation.state.params;
        if(myParams === undefined){
            console.log("Params undefined!!!!!");
           await this.setState({words: AlphabetMap.words , colSize: 3 });
        }else{
            console.log("Params defined");
            if(myParams.words === undefined){
                this.setState({ words: AlphabetMap.words});
            }else{
                this.setState({ words: myParams.words});
            }
            if(myParams.colSize === undefined){
                this.setState({ colSize: 3 });
            }else{
                this.setState({ colSize: myParams.colSize });
            }
        }
        
        await Font.loadAsync({
            'lucida-console': require('../assets/fonts/lucida-console.ttf'),
        });
        console.log("Lucida console font uploaded!")
    }

    nextPage = (latin) => {
        console.log(JSON.stringify(latin));
        let index = this.state.words.findIndex(x => x.CharEntry.latin === latin);
        console.log("index: " + index);
        if (index === -1) {
            console.log("Word not found: " + latin);
            return null;
        } else {
            if (index >= this.state.words.length - 1) {
                return this.state.words[0].CharEntry;
            } else {
                return this.state.words[index + 1].CharEntry;
            }
        }
    }

    toSettings = () => {
        console.log("toSettings ....");
        this.props.navigation.navigate('SettingsScreen');
    }

    _onPress(item) {
        console.log("onPress activated!!! ->  " + JSON.stringify(item));
        this.props.navigation.navigate('CardScreen', { 'CharEntry': item.CharEntry, 'nextPage': this.nextPage });
    }
    updateLanguage = (lang) => {
        console.log("Language changed to " + lang);
        list = AlphabetMap.words;
        if (lang == 0) {
            //lang baluchi
            console.log("Sorted by baluchi")
            list.sort((a, b) => (a.CharEntry.id > b.CharEntry.id) ? 1 : -1);
            this.setState({ words: list });
        } else {
            //lang latin
            console.log("Sorted by latin");
            list.sort((a, b) => (a.CharEntry.latin_id > b.CharEntry.latin_id) ? 1 : -1);
            this.setState({ words: list });
        }
        this.setState({ language: lang });
    }
    render() {
        console.log("Alphabets rendering ...");
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <PageHeader toSettings={this.toSettings} />
                </View>
                <View style={styles.radioContainer}>
                    <LangRadioButton updateLanguage={this.updateLanguage} />
                </View>
                <View style={styles.flatListcontainer}>
                    <AlphabetFlatList words={this.state.words} colSize={this.state.colSize} _onPress={this._onPress} />
                </View>
            </View>
        );
    }
}

export default Alphabets;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0FFFF',

        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'

    },
    flatListcontainer:{
        flex: 8
    },
    header: {
        flex: 2,

    },
    radioContainer: {
        flex: 1,
    },
});