import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TextCard from './TextCard';
import  getValue from '../constants/BaluchiShortChars';

class CharactersManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            char: props.chars.char,
            charL: props.chars.charL
        }
     //   this.getValue = this.getValue.bind(this);
    }
 /*   getValue(key) {
        map = new Map(
            [
                ["ا", "ا"],
                ["آ", "آ"],
                ["ب", "ﺑ"],
                ["ت", "ﺗ"],
                ["ج", "ﺟ"],
                ["م", "ﻣ"],
                ["پ", "ﭘ"],
                ["چ", "ﭼ"],
                ["ش", "ﺷ"],
                ["د", "د"],
                ["ڈ", "ڈ"],
                ["س", "ﺳ"]
            ]
        );
        console.log("Key: " + key);
        return map.get(key);
    }*/
    render() {
        let balChar = this.state.char;
        console.log("balChar: " + balChar);
        let smallChar = getValue(balChar);
        let charL = this.state.charL;
        let smallLatin = charL.toLowerCase();
        console.log("Small char: " + smallChar);
        let latin = charL + " " + charL.toLowerCase();
        let baluchi = smallChar + " " + balChar;
        return (
            <TextCard baluchi={baluchi} latin={latin}/>
      /*      <View style={styles.charContainer}>
                <View style={styles.char}>
                    <Text style={styles.charLatinText}>{smallLatin} {this.state.charL}</Text>
                </View>
                <View style={styles.char}>
                    <Text style={styles.charText}>{smallChar} {this.state.char} </Text>
                </View>
            </View>*/
        );
    }
}

export default CharactersManager;

const styles = StyleSheet.create({
    charContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderColor: 'blue',
        borderWidth: 1,
        borderRadius: 10,
        width: '90%',
        padding: 15,


    },
    char: {
        //   height: 40,
        margin: 3
    },
    charText: {
        color: 'red',
        fontSize: 22,
        fontWeight: 'bold'
    },
    charLatinText: {
        color: 'blue',
        fontSize: 22,
        fontWeight: 'bold'
    },
});