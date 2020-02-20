import React from 'react';
import { Image, StyleSheet } from 'react-native';
import ImageResources from '../constants/ImageResources';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class ImageManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            latin: props.latin
        }
    }

    render() {
        let imgUrl = ImageResources[this.state.latin];
        return (
            <Image
                source={imgUrl}
                style={styles.img}
                resizeMode="contain"
            />
        );
    }
}

export default ImageManager;

const styles = StyleSheet.create({
    img: {
        //flex:1
        width: wp('80%'),
        height: hp('33%'),
        //justifyContent: 'center'
        alignContent: 'space-around'
    },
});