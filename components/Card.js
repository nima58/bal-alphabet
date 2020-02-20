import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
//import SoundPlayer from 'react-native-sound-player';
import Sound from 'react-native-sound';


class Card extends React.Component {
    constructor(props) {
        super(props);
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

    }

    componentDidMount() {
        // Import the react-native-sound module
       // var Sound = require('react-native-sound');

        // Enable playback in silence mode
        Sound.setCategory('Playback');
        appSounds.likeSound = new Sound("aap.mp3", Sound.MAIN_BUNDLE, error => {
            if (error) {
                console.log("failed to load the sound", error);
            } else {
                console.log("Successfully loaded the audio file!")
            }
        });
    }

    playSound = () => {
                // Import the react-native-sound module
                //var Sound = require('react-native-sound');

                // Enable playback in silence mode
                Sound.setCategory('Playback');
        const sound = new Sound('aap.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                // do something
                console.log("ERROR... " + error);
            }

            // play when loaded
            sound.play();
        });
    }
    /*
    playSound = () => {
        try {
            // play the file tone.mp3
            SoundPlayer.playSoundFile('aap', 'mp3')
            // or play from url
         //   SoundPlayer.playUrl('http://eurobaluchi.com/alphabet/audio/aap.mp3')

        } catch (e) {
            console.log(`cannot play the sound file .....`, e)
        }
    }*/
    render() {
        return (
            <View>
                <View>
                    <Text>{this.state.baluchi}</Text>
                </View>
                <View>
                    <Text> {this.state.latin}</Text>
                </View>
                <View>
                    <Button title='Play Audio' onPress={this.playSound} />
                </View>

            </View>
        );
    }
}

export default Card;

const styles = StyleSheet.create({

});