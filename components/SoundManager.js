import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Foundation } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Tooltip, Text } from 'react-native-elements';
import SoundResources from '../constants/SoundResources';
import { Audio } from 'expo-av';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class SoundManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            latin: props.latin
        }
        this.handlePlaySound = this.handlePlaySound.bind(this);
    }

    handlePlaySound = async name => {
        const soundObject = new Audio.Sound()

        try {
            let source = SoundResources[name];
            console.log(source);
            await soundObject.loadAsync(source)
            await soundObject
                .playAsync()
                .then(async playbackStatus => {
                    setTimeout(() => {
                        soundObject.unloadAsync()
                    }, playbackStatus.playableDurationMillis)
                })
                .catch(error => {
                    console.log(error)
                })
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <TouchableOpacity
                style={[styles.button, { backgroundColor: 'white' }]}
                onPress={() => this.handlePlaySound(this.state.latin)}
            >
               {/* <Foundation name="sound" size={wp(11)} color="blue" />*/}
                <AntDesign name="sound" size={wp(11)} color="blue" />
            </TouchableOpacity>
        );
    }
}

export default SoundManager;

const styles = StyleSheet.create({
    container:{ 
        flex:1,
        flexDirection: 'row', 
        borderColor: 'blue', 
        borderWidth: 1,

        justifyContent:'space-around' 
    },
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    buttonText: {
        color: 'green',
        fontSize: 28
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'green'
    },

});
