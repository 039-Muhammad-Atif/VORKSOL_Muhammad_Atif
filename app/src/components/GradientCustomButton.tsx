// import libraries
import React, { FC, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface GradientButtonProps {
    onPress: () => any;
    name: any;
    buttonStyle: any;
    textStytle: any;
    colorsArray: any;
    colorsAngle:number;
}

// create a Gradient Button.
const GradientCustomButton: FC<GradientButtonProps> = ({
    onPress,
    name,
    textStytle,
    buttonStyle,
    colorsArray,
    colorsAngle,
}) => {

    return (
        <TouchableOpacity onPress={onPress} 
        style={{width:'100%',alignItems: 'center',justifyContent:'center'}}>
            <LinearGradient
                colors={colorsArray} // At least 2 colors are mandatory in colorsArray.
                style={{ ...styles.buttonStyle, ...buttonStyle }}
                useAngle={true}
                angle={colorsAngle} // the angle to stack a colorsArray.
            >
                <Text style={{ ...styles.textStytle, ...textStytle }}>{name}</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    buttonStyle: {
        width: '90%',
        alignItems: 'center',
        padding: 8,
        borderRadius: 8,
        marginVertical: 8,
    },
    textStytle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    }
})

export default GradientCustomButton;
