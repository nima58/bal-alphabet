import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


class AlphabetFlatList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colSize: props.colSize,
            words: props.words,
        }
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
        console.log("AlphabetFlatList render ...");
        return (
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
        );
    }
}

export default AlphabetFlatList;

const styles = StyleSheet.create({

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
    latin: {
        color: 'blue',
        //     fontSize: 28
    },
    baluchi: {
        color: 'red',
        //   fontSize: 28
    },

});