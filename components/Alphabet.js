import React from 'react';
import { View, StyleSheet } from 'react-native';
import ImageManager from './ImageManager';
import CharactersManager from './CharactersManager';
import WordsManager from './WordsManager';
import NavigationHandler from './NavigationHandler';
import PageHeader from './PageHeader';

class Alphabet extends React.Component {
    constructor(props) {
        super(props);
        console.log("Constructor accessed!!!!");
        let charEntry = props.navigation.state.params.CharEntry;
        this.state = {
            id: charEntry.id,
            char: charEntry.char,
            charL: charEntry.charL,
            baluchi: charEntry.baluchi,
            latin: charEntry.latin,
            sound: charEntry.sound,
            img: charEntry.img

        }
        this.toNextPage = this.toNextPage.bind(this);
    }

    toMainPage = () => {
        this.props.navigation.navigate('AlphabetsScreen');
    }

    toNextPage = () => {
        let nextPage = this.props.navigation.state.params.nextPage;
        let ltn = this.state.latin;
        console.log("LATIN: " + ltn);
        charEntry = nextPage(ltn);
        if (charEntry != null) {
            console.log("DONE!!!! " + JSON.stringify(charEntry));
            this.props.navigation.push('CardScreen', { 'CharEntry': charEntry, 'nextPage': this.props.navigation.state.params.nextPage });
        } else {
            console.log("Page null !!!");
        }
    }

    render() {
      const b = '\uFE91' ;
      console.log("arabic small b: " + b);
      console.log("arabic big b: " + b.toUpperCase());
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <PageHeader />
                </View>
                <View  style={styles.charsContainer}>
                    <CharactersManager chars={{char:this.state.char, charL:this.state.charL}} />
                </View >
                <View style={styles.wordsContainer}>
                    <WordsManager words={{latin:this.state.latin, baluchi:this.state.baluchi, charL:this.state.charL}}/>
                </View>
                <View style={styles.imageContainer}>
                    <ImageManager latin={this.state.latin} />
                </View>
                <View style={styles.navigation}>
                    <NavigationHandler latin={this.state.latin} toMainPage={this.toMainPage} toNextPage={this.toNextPage} />
                </View>
            </View>
        )
    }
}

export default Alphabet;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 5,
        alignItems: 'center'
    },
    header: {
        flex: 3,
    },
    imageContainer: {
        flex: 6,
        width: '90%',
        justifyContent: 'center',
        marginTop: 10,
        marginLeft: 22,
        

    },
    navigation:{
        flex: 3,
        width: '90%',
        marginBottom: 10,

    },
    charsContainer:{
        flex: 2,
        width: '90%',
        padding: 10

    },
    wordsContainer:{
        flex: 2,
        width: '90%',
        padding: 10
    },
})