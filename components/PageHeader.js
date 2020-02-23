import React from 'react';
import { Header, Image } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Feather } from '@expo/vector-icons';
import { View, Text, StyleSheet } from 'react-native';

const Picture = require('../assets/pictures/baluchilogo.jpg');

class PageHeader extends React.Component {
    constructor(props){
        super(props);
        console.log("PageHeader constructor ...");
        this.toSettings = this.toSettings.bind(this);
    }
    toSettings = () => {
        console.log("toSettings ....");
        this.props.toSettings();
    }
    render() {
        let textComponent= ()=>{
            return(
            <View style={styles.textContainer} >
                <Text style={styles.text}>Balúči āb</Text>
                <Text style={styles.text}>بلۆچی آب</Text>
            </View>
            );
        }
        return (
            <Header
                containerStyle={{
                    height: hp('14%'),
                    width: '98%',
                  // backgroundColor: '#3D6DCC',
                  backgroundColor: 'orange',
                    justifyContent: 'space-between'
                }}
                leftComponent={<Image source={Picture}
                    style={{ width: wp('34%'), height: hp('13%'), resizeMode: 'contain', marginBottom: 22 }} />}
                centerComponent={textComponent()}
                rightComponent={<Feather name='settings' size={32} color='blue' onPress={this.toSettings} />}
            />
        );

    }
}
export default PageHeader;

const styles = StyleSheet.create({
    textContainer: {
       // flex: 1,
        alignContent: 'center',
        width: wp('24%'), 
        height: hp('13%'),
       // borderColor: 'white',
       // borderWidth: 1

    },
    text: {
        //color: '#fff', 
        color: 'blue',
        textAlign: 'right', 
        fontSize: wp('6%'), 
        fontWeight: 'bold', 
        width: wp('30%')
    }
});