import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Slider } from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import AlphabetMap from './AlphabetMap';

class AppSettings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1
        }
        this.setValue= this.setValue.bind(this);
    }

    setValue= (val)=>{
        console.log("setValue:: Val : " + JSON.stringify(val));
        this.setState({value: val.value });
     //   this.props.navigation.push('CardScreen', { 'CharEntry': charEntry, 'nextPage': this.props.navigation.state.params.nextPage });
     //   this.props.navigation.push('AlphabetsScreen', {words: AlphabetMap.words, colSize: 1});
        this.props.navigation.push('AlphabetsScreen', {words: AlphabetMap.words, colSize: val.value});
//        this.props.setColSize(val);
    }

    render() {
        return (
            <View style={styles.container}>
                <Slider
                    maximumValue={5}
                    minimumValue={1}
                    step={1}
                    value={this.state.value}
                    onValueChange={value => this.setValue({ value })}
                />
                <Text>Value: {this.state.value}</Text>
            </View>
        );
    }
}

export default AppSettings;

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        alignItems: 'stretch', 
        justifyContent: 'center',
        width: wp('90%'),
        height: hp('7%') 
    }

});
