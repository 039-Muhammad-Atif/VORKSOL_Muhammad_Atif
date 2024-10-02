import React, { useContext, useState } from 'react';
import { Button, Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import CustomButton from '../../../components/CustomButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../../../theme/Colors';
import AppBar from '../../../components/AppBar';


const HomeScreen: React.FC = ({ navigation }) => {

    return (
        <SafeAreaView style={{flex:1, backgroundColor:Colors.backgroundColor}}>
            
            <StatusBar
                animated={true}
                backgroundColor={Platform.OS === 'android' ? Colors.blueBackground : 'transparent'} // Android only
                barStyle={Platform.OS === 'android' ? 'light-content': 'dark-content'}
            />
            
            <AppBar
                screenName={'Home Screen'}
            />
            
            <View style={styles.container}>
                <CustomButton
                    //    onPress={()=>} 
                    name={'Task-1  Convert Desgin To Code'}
                    buttonStyle={{ margin: 10 }}
                />
                <CustomButton
                    onPress={() => navigation.navigate('ContactListScreen')}
                    name={'Task-2   Contact List App'}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    greeting: {
        fontSize: 20,
        margin: 16,
    },
});

export default HomeScreen;
