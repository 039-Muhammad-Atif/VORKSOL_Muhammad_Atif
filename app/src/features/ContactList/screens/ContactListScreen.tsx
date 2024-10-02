import React from 'react';
import { FlatList, Image, Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Images from '../../../theme/Images';
import contactArray from '../../../../config/constants';
import Colors from '../../../theme/Colors';
import AppBar from '../../../components/AppBar';
import { SafeAreaView } from 'react-native-safe-area-context';


const ContactListScreen: React.FC = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container}>

            <StatusBar
                animated={true}
                backgroundColor={Platform.OS === 'android' ? Colors.blueBackground : 'transparent'} // Android only
                barStyle={Platform.OS === 'android' ? 'light-content' : 'dark-content'}
            />

            {/* Custom AppBar component */}
            <AppBar
                screenName={'Contact List'}
                left={true}
            />
            
            {/* Display the Contact list */}
            <View style={styles.itemMainContainer}>
                <FlatList
                    data={contactArray}
                    renderItem={({ item, index }) =>
                        <TouchableOpacity style={styles.itemContainer}
                            onPress={() => navigation.navigate('ContactDetailScreen', { name: item.name, phone: item.phone, image: item.image })}
                        >
                            <View style={{ padding: 8 }}>
                                <Image
                                    source={item.image}
                                    style={styles.imageStyle}
                                />
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center' }}>
                                <Text style={styles.nameTextStyle}>{item.name}</Text>
                                <Text style={styles.textStyle}>{item.phone}</Text>
                            </View>
                        </TouchableOpacity>
                    } />
            </View>
        </SafeAreaView>
    );
};

// Use StyleSheet for styling components.
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // margin: 16,
        backgroundColor: Colors.backgroundColor,
    },
    itemMainContainer: {
        margin: 16,
        flex: 1,
        borderWidth: 1,
        borderRadius: 16,
        borderColor: Colors.blueBackgroundOpacity10,
        backgroundColor: Colors.blueBackgroundOpacity10
    },
    itemContainer: {
        flexDirection: 'row',
        marginHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: Colors.borderColor,
        // padding: 16
    },
    imageStyle: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    textStyle: {
        textAlign: 'center',
        fontSize: 14,
        color: Colors.grayText
    },
    nameTextStyle: {
        textAlign: 'center',
        fontSize: 16,
        color: Colors.blueNameText
    },
    greeting: {
        fontSize: 20,
        margin: 16,
    },
});

export default ContactListScreen;
