import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';

class LangRadioButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            types: [
                { label: 'بلۆچی', value: 0 },
                { label: 'لاتین', value: 1 }
            ],
            value: 0
        }
        this.setLanguage = this.setLanguage.bind(this);
    }

    setLanguage= (val)=>{

        console.log("value is: " + val);
        this.setState({ value: val });
        this.props.updateLanguage(val);
    }
    render() {
        return (
            <View style={styles.container}>
                <RadioForm
                    radio_props={this.state.types}
                    initial={0}
                    formHorizontal={true}
                    labelHorizontal={true}
                    buttonColor={'#2196f3'}
                    onPress={(value) => { this.setLanguage(value) }}
                />

            </View>
        );
    }
}

export default LangRadioButton;

const styles = StyleSheet.create({
    container: {
        width: '95%',
     //   height:50
     borderColor: 'blue',
     borderWidth: 1
    }
});