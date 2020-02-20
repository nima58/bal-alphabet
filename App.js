import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Alphabets from './components/Alphabets';
import Card from './components/Alphabet';
import AppSettings from './components/AppSettings';

class App extends React.Component {

  render() {
    console.log("Baluchi Alphabet app starts ....")
    return (
      <View style={styles.container}>
        <Text>Baluchi Alphabet app demo ..... !</Text>
      </View>
    );
  }
}

const RootStack = createStackNavigator({
  Home: App,
  AlphabetsScreen: Alphabets,
  CardScreen: Card,
  SettingsScreen: AppSettings
}, {
  initialRouteName: 'AlphabetsScreen',
});

const AppContainer = createAppContainer(RootStack);
export default AppContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
