import React from 'react';
import { FlatList, Image, Linking, Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Images from '../../../theme/Images';
import contactArray from '../../../../config/constants';
import Colors from '../../../theme/Colors';
import AppBar from '../../../components/AppBar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native';
import CustomButton from '../../../components/CustomButton';


const ContactDetailScreen: React.FC = ({ navigation }) => {

    // Extracting props passed from the previous screen
    const route = useRoute();
    const { name, phone, image } = route.params;

    // Function to make a phone call whene we press the phone number
    const makeCall = ()=>{
        let number = '';
        if(Platform.OS === 'android'){
            number = `tel:${parseInt(phone)}`
        }
        else{
            number = `telprompt:${parseInt(phone)}`
        }
        return( Linking.openURL(number))
    };

    return (
        <SafeAreaView style={styles.container}>

            <StatusBar
                animated={true}
                backgroundColor={Platform.OS === 'android' ? Colors.blueBackground : 'transparent'} // Android only
                barStyle={Platform.OS === 'android' ? 'light-content' : 'dark-content'}
            />

            {/* Custom AppBar component */}
            <AppBar
                screenName={'Contact Detailed'}
                left={true}
            />

            {/* Displaying the contact details */}
            <View style={styles.itemContainer}>
                <View style={{paddingBottom:16, justifyContent: 'center', alignItems: 'center',}}>
                    <Image
                        source={image}
                        resizeMode='cover'
                        style={styles.imageStyle}
                    />
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.nameTextStyle}>{name}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={[styles.textStyle, { color: Colors.blueText }]}>Ph # :</Text>
                        <Text onPress={()=>makeCall()} style={styles.textStyle}>{phone}</Text>
                    </View>
                </View>
            </View>
            <View style={{alignItems:'center'}}>
            <CustomButton
                onPress={() => navigation.goBack()}
                name={'Contact List'}
                buttonStyle={{marginBottom:16,padding:12}}
                textStytle={{fontSize:16}}
            />
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
    itemContainer: {
        margin: 16,
        paddingBottom:16,
        flex: 1,
        borderRadius: 16,
        backgroundColor: Colors.blueBackgroundOpacity10,
        justifyContent:'center',
    },
    imageStyle: {
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: Colors.blueBackground,
    },
    textStyle: {
        // textAlign: 'center',
        fontSize: 16,
        color: Colors.redText,
        fontWeight: 'bold',
        marginTop: 20,
        marginRight: 16
    },
    nameTextStyle: {
        // textAlign: 'center',
        fontSize: 16,
        color: Colors.blueNameText,
        fontWeight: 'bold'
    },
});

export default ContactDetailScreen;
