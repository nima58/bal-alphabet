import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AlphabetMap from './AlphabetMap';
import wordSorter from './SortUtils';

class AlphabetWords extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            words:[]
        }
    }
    componentDidMount() {
        let sorted = wordSorter(AlphabetMap.words);
        this.setState({ words: sorted });
        console.log("sorted.length: " + sorted.length);
    }
}

export default AlphabetWords;

const styles 