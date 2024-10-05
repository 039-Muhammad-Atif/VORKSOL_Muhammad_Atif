import React from 'react';
import { Image, StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import Colors from '../theme/Colors';
import Images from '../theme/Images';
import { useNavigation } from '@react-navigation/native';

interface AppBarProps{
    appBarContainer: StyleProp<ViewStyle>;
    left: boolean;
    centerIconImage: any;
    screenName: string;
}

const AppBar: React.FC<AppBarProps> = ({
    appBarContainer,
    screenName,
    centerIconImage,
    left,
}) => {

    let navigation = useNavigation();
    return (
        <View style={{...styles.appBarContainer, ...appBarContainer}}>
            <View style={{flex:1, alignItems:'flex-start'}}>
                {left ? <TouchableOpacity
                onPress={()=> navigation.goBack()}
                >
                    <Image
                    source={Images.left_back_arrow}
                    resizeMode='contain'
                    style={styles.leftIconStyle}
                    />
                </TouchableOpacity>:null}
            </View>
            <View style={{ alignItems:'center',flexDirection:'row'}}>
                { centerIconImage ? 
                <Image
                source={centerIconImage}
                resizeMode='contain'
                style={styles.centerIconStyle}
                />:
                null}
                <Text style={styles.nameTextStyle}>{screenName}</Text>
            </View>
            <View style={{flex:1, alignItems:'flex-end'}}>
                {/* <TouchableOpacity
                onPress={()=> navigation.goBack()}
                >
                    <Image
                    source={Images.profileImage}
                    resizeMode='contain'
                    style={styles.leftIconStyle}
                    />
                </TouchableOpacity> */}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    appBarContainer: {
        backgroundColor: Colors.blueBackground,
        paddingHorizontal: 16,
        paddingVertical: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    leftIconStyle: {
        width: 16,
        height: 20,
    },
    centerIconStyle: {
        width: 40,
        height: 28,
    },
    nameTextStyle: {
        fontSize: 16,
        color: Colors.whiteText,
        fontWeight:'bold'
    },
    greeting: {
        fontSize: 20,
        margin: 16,
    },
});

export default AppBar;
