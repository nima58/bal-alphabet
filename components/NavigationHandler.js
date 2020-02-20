import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Octicons, FontAwesome } from '@expo/vector-icons';
import SoundManager from './SoundManager';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


class NavigationHandler extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            latin: props.latin
        }
    }

    render() {

        return (
            <View style={styles.nextContainer}>
                <View style={styles.home}>
                    <FontAwesome name='home' size={wp(11)} color='blue' onPress={this.props.toMainPage} />
                </View>
                <View style={styles.sound}>
                    <SoundManager latin={this.state.latin} />
                </View>
                <View style={styles.next}>
                    <Octicons name='arrow-right' size={wp(11)} color='blue' onPress={this.props.toNextPage} />
                </View>
            </View>
        );
    }
}

export default NavigationHandler;

const styles = StyleSheet.create({
    nextContainer: {
        flex: 1,
        flexDirection: 'row',
        //  alignContent: 'space-around',
        marginBottom: 15,
        width: '95%'
    },
    next: {
        margin: 25,
        width: '25%',
        alignContent: 'flex-end'
    },
    sound: {
        margin: 25,
        width: '25%',
        alignContent: 'center'
    },
    home: {
        margin: 25,
        width: '25%',
        alignContent: 'flex-start'

    }
});