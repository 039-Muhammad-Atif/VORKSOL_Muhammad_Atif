import React from 'react';
import { Image, StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import Colors from '../theme/Colors';
import Images from '../theme/Images';
import { useNavigation } from '@react-navigation/native';

interface AppBarProps{
    appBarContainer: StyleProp<ViewStyle>;
    screenName: string;
    left: boolean;
}

const AppBar: React.FC<AppBarProps> = ({
    appBarContainer,
    screenName,
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
            <View style={{ alignItems:'center'}}>
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
