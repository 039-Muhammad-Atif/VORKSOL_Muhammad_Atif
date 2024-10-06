// import libraries
import React, { FC, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
  TextInput,
  Image,
} from 'react-native';

interface ButtonProps {
  onPress: () => any;
  name: any;
  buttonStyle: any;
  textStytle: any;
  rightIconImage: any;
  leftIconImage: any;
}

// create a component
const CustomButton: FC<ButtonProps> = ({
  onPress,
  name,
  textStytle,
  buttonStyle,
  rightIconImage,
  leftIconImage,
}) => {

  return (
    <TouchableOpacity style={{ ...styles.buttonStyle, ...buttonStyle }}
      onPress={onPress}>
      {leftIconImage ?
        <Image
          source={leftIconImage}
          resizeMode='contain'
          style={styles.rightIconStyle}
        /> :
        null}
        <Text style={{ ...styles.textStytle, ...textStytle }}>{name}</Text>
      {rightIconImage ?
        <Image
          source={rightIconImage}
          resizeMode='contain'
          style={styles.rightIconStyle}
        /> :
        null}
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  buttonStyle: {
    flexDirection: 'row',
    width: '90%',
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    borderRadius: 8,
    marginVertical: 8,
  },
  textStytle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white'
  },
  rightIconStyle: {
    width: 30,
    height: 30,
    margin:4
  },
})

export default CustomButton;
