import React from 'react';
import { Header, Image } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Feather } from '@expo/vector-icons';

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
                centerComponent={{ text: 'بلۆچی آب', style: { color: '#fff', textAlign: 'right', fontSize: wp('6%'), fontWeight: 'bold', width: wp('30%') } }}
                rightComponent={<Feather name='settings' size={32} color='blue' onPress={this.toSettings} />}
            />
        );

    }
}
export default PageHeader;