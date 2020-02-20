import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Settings } from 'react-native';
import AlphabetMap from './AlphabetMap';
import wordSorter from './SortUtils';
import LangRadioButton from './LangRadioButton';
import AppSettings from './AppSettings';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

//const heightArr = [35, 35, 35]
//const widthArr = [35, 35, 35]

class AlphabetsTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            colSize: props.colSize,
            words: [],
            itemWidth: '',
            change: true,
            language: 0 //baluchi 0, latin 1
        }
        // this._goToPage = this._goToPage.bind(this);
        this.renderItem = this.renderItem.bind(this);
        this.updateLanguage = this.updateLanguage.bind(this);
        this.setColSize = this.setColSize.bind(this);
        console.log("AlphabetsTable constructor ...")
    }

    componentDidMount() {
        /*  console.log("componentDidMount start!");
          Font.loadAsync({
            'lucida-console': require('../assets/fonts/LucidaConsole.ttf'),
          });
          console.log("componentDidMount end!");*/
        myWords = AlphabetMap.words;
        //this.sortList(myWords);
        this.setState({ words: myWords });
        let colSize = this.state.colSize;
        console.log("colSize" + colSize);
        let width = 100 / (colSize + 1);
        this.setState({ itemWidth: width });
    }
    setColSize = (size) => {
        //        this.setState({words: AlphabetMap.words, colSize: size});
        this.setState({ words: AlphabetMap.words });

    }
    printing = (list) => {
        console.log(list.baluchi);
    }
    sortList = (list) => {
        list.sort((a, b) => (a.latin > b.latin) ? 1 : -1);
        // obj = JSON.parse(list);
        list.forEach(element => {
            let entry = element.CharEntry;
            console.log(entry.latin);
        })
        /*  console.log(list);
          for(i=0;i<list.length;i++){
              let item= list[i];
              console.log(item.latin);
          }*/

        list.sort((a, b) => (a.baluchi > b.baluchi) ? 1 : -1);
        console.log("Baluchi -------------------");
        list.forEach(element => {
            let entry = element.CharEntry;
            console.log(entry.baluchi);
        })
        //      console.log(list);
        //       for(i=0;i<list.length;i++)
        //           console.log(list[i].baluchi);
    }

    _onPress(item) {
        let lex = JSON.stringify(item.CharEntry);
        console.log('CharEntry: ' + lex);
    }

    updateLanguage = (lang) => {
        console.log("Language changed to " + lang);
        list = AlphabetMap.words;
        if (lang == 0) {
            //lang baluchi
            console.log("Sorted by baluchi")
            /*   list.sort((a, b) => {
                   balA = a.CharEntry.baluchi.toString();
                   balB = b.CharEntry.baluchi.toString();
                   console.log(balA + "   " + balB);
                 //  return balA.localCompare(balB) ? 1 : -1;
               });*/
            list.sort((a, b) => (a.CharEntry.id > b.CharEntry.id) ? 1 : -1);
            this.setState({ words: list });

        } else {
            //lang latin
            console.log("Sorted by latin");
            /*   list.sort((a, b) => {
                   latA = a.CharEntry.latin.toString();
                   latB = b.CharEntry.latin.toString();
                   console.log(latA + "   " + latB);
              //     return latA.localCompare(latB) ? 1 : -1;
               });*/
            list.sort((a, b) => (a.CharEntry.latin_id > b.CharEntry.latin_id) ? 1 : -1);
            this.setState({ words: list });

        }
        this.setState({ language: lang });
    }

    renderItem = ({ item }) => {
        let myWidth = (80 / this.state.colSize) + "%";
        let myFontSize = (20 / this.state.colSize) + "%";
        return (
            <TouchableOpacity onPress={() => this.props._onPress(item)}>
                <View style={[styles.itemContainer, { width: wp(myWidth) }]}>
                    <Text style={[styles.latin, { fontSize: wp(myFontSize) }]}>{item.CharEntry.charL}  </Text>
                    <Text style={[styles.baluchi, { fontSize: wp(myFontSize) }]}>{item.CharEntry.char}</Text>
                </View>
            </TouchableOpacity>

        )
    };
    render() {
        console.log("Rendering Table!");
        console.log("words.length when render: " + this.state.words.length);
        return (
            <View style={styles.container}>
                <View style={styles.radioContainer}>
                    <LangRadioButton updateLanguage={this.updateLanguage} />
                </View>
                <View style={styles.listContainer}>
                    <FlatList
                        data={this.state.words}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => index.toString()}
                        numColumns={this.state.colSize}
                        extraData={this.state.change}
                        horizontal={false}
                        //  onRefresh={true}
                        ListEmptyComponent={() => (
                            <View
                                style={{
                                    flex: 1,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginTop: 250
                                }}
                            >
                                <Text style={{ color: '#bad555' }}>No Contacts Found</Text>
                            </View>
                        )}
                    />
                </View>
            </View>
        );
    }
}

export default AlphabetsTable;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

        padding: 10,
        borderWidth: 1,
        borderColor: 'green'

    },
    radioContainer: {
        flex: 1,
    },
    settingsContainer: {
        flex: 1,
    },

    listContainer: {
        flex: 5
    },
    itemContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 3,
        borderColor: 'blue',
        borderRadius: 10,
        padding: 10,
        // marginBottom: 5,
        // margin: 3,
        flexDirection: 'row',
        fontWeight: 'bold',
        backgroundColor: '#FBFE6C',
        //Shadow
        shadowColor: 'black',
        shadowOpacity: 0.58,
        shadowOffset: { width: 0, height: 12 },
        shadowRadius: 16,
        //  backgroundColor: 'white',
        elevation: 25, /* Workaround for shadow in android */

    },
    item: {
        padding: 10,
        //   fontSize: 48,  
        //  height: 44,  
        //  color: 'red', 
        fontWeight: 'bold',

    },
    latin: {
        color: 'blue',
        //     fontSize: 28
    },
    baluchi: {
        color: 'red',
        //   fontSize: 28
    },
    language: {
        height: 50,
        width: 100,

    },
    langContainer: {
        width: '90%',
        borderColor: 'blue',
        borderWidth: 3
    },
    radio: {

    }
});