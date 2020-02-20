import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TextCard from './TextCard';

class WordsManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            latin: props.words.latin,
            baluchi: props.words.baluchi,
            charL: props.words.charL
        }
    }

    render() {
        const getAllIndexes = (word, ch) => {
            console.log("word: " + word);
            console.log("ch: " + ch);
            var indexes = [], i;
            for (i = 0; i < word.length; i++)
                if (word[i] === ch) {
                    console.log("Pushed!!!! " + word[i]);
                    indexes.push(i);
                } else {
                    console.log("Not Pushed!!!! " + word[i]);
                }

            return indexes;
        }

        const generateColoredComp = (indexes) => {
            var textList = '';
            var tempText= '';
            var startIndex = 0;
            var currentIndex = 0;
            var charL = this.state.charL;
            var word = this.state.latin;
            console.log("generateColoredComp>>>>>>> indexes length: " + indexes.length + " words length " + word.length);
            for (i = 0; i < word.length; i++) {
                if (indexes.includes(i)) {
                    if (currentIndex > startIndex) {
                        // Add text to list
                        //set current/startIndex to i+1
                        let subtext = word.substring(startIndex, currentIndex);//
                        let text = `<Text style={styles.text}>${subtext}</Text>`;
                        textList +=text;
                        currentIndex = i + 1;
                        startIndex = i + 1;
                    }
                    //add colored to list.
                    let text = `<Text style={styles.charLatinText}>${charL}</Text>`;
                    textList +=text;
                    console.log("loop text" + text);
                    console.log("loop textlist" + textList);
                    currentIndex = i + 1;

                } else {
                    let subtext = word.substring(startIndex, currentIndex);//
                   // let text = `<Text style={styles.text}>${subtext}</Text>`;
                    tempText +=subtext;
                    currentIndex++;
                }
            }
            console.log("textList: " + textList);
            return (

                    {textList}

            );
        }

        const viewColoredLatin = () => {
            let latin = this.state.latin;
            let charL = this.state.charL;
            let indexes = getAllIndexes(latin, charL.toLowerCase());
            return generateColoredComp(indexes);
            /* var re = new RegExp(c,"g");
             var res = str.replace(re, `<Text style={styles.charLatinText}>${c}</Text>`);
             console.log("RES: " + res);
             var splt = str.split(c);
             console.log("splt.length: " + splt.length);*/
           // return res;
        }
        //  viewColoredLatin();
        return (
            <TextCard baluchi={this.state.baluchi} latin={this.state.latin} />
      /*      <View style={styles.wordContainer}>
                <View style={styles.latin}>
                    <Text style={styles.charLatinText}>{this.state.latin}</Text>

                </View>
                <View style={styles.baluchi}>
                    <Text style={styles.charBaluchiText}>{this.state.baluchi}</Text>
                </View>
            </View>*/
        );
    }
}

export default WordsManager;

const styles = StyleSheet.create({
    wordContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderColor: 'blue',
        borderWidth: 1,
        borderRadius: 10,
        width: '90%',
    //    margin: 10,
        

    },
    charLatinText: {
        color: 'blue',
        fontSize: 22,
        fontWeight: 'bold',
     //   padding: 5
    },
    charBaluchiText: {
        color: 'red',
        fontSize: 22,
        fontWeight: 'bold',
     //   padding: 5
    },
    latin: {
      //  margin: 5,
        flexDirection: 'row',
        fontSize: 28,
        fontWeight: 'bold'
    },
    baluchi: {
      //  margin: 5,
        flexDirection: 'row',
        fontSize: 28,
        fontWeight: 'bold',


    },
    text: {
        fontSize: 28,
        fontWeight: 'bold'
    },

});