import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


class TextCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            baluchi: props.baluchi,
            latin: props.latin
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.text}>
                    <Text style={styles.latin}>{this.state.latin}</Text>
                </View>
                <View style={styles.text}>
                    <Text style={styles.baluchi}>{this.state.baluchi} </Text>
                </View>
            </View>
        );
    }
}

export default TextCard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
       // alignContent: 'center',
        borderColor: 'blue',
        borderWidth: 2,
        borderRadius: 10,
        width: '95%',
        //   padding: 15,
        height: hp('10%'),
        backgroundColor: '#F0FFFF',
        //Shadow 
        shadowColor: 'black',
        shadowOpacity: 0.58,
        shadowOffset: { width: 0, height: 12 },
        shadowRadius: 16,
        //  backgroundColor: 'white',
        elevation: 25, /* Workaround for shadow in android */


    },
    text: {
        //   height: 40,
        margin: 3,
        fontFamily: 'lucida-console'
    },
    baluchi: {
        color: 'red',
        fontSize: wp('7%'),
        fontWeight: 'bold',

    },
    latin: {
        color: 'green',
        fontSize: wp('7%'),
        fontWeight: 'bold',
        //   fontFamily: 'lucida-console'
    },

});