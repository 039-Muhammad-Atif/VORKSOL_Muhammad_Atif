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

interface ButtonProps{
    onPress: ()=> any;
    name:any;
    buttonStyle: any;
    textStytle:any;
}

// create a component
const CustomButton: FC<ButtonProps>= ({
  onPress,
  name,
  textStytle,
  buttonStyle,
}) => {
    
    return (
        <TouchableOpacity style={{...styles.buttonStyle, ...buttonStyle}}
        onPress={onPress}>
          <Text style={{...styles.textStytle, ...textStytle}}>{name}</Text>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
  buttonStyle:{
    width:'90%',
    backgroundColor:'green', 
    alignItems:'center', 
    padding:8, 
    borderRadius:8,
    marginVertical:8, 
  },
  textStytle:{
    fontSize:16, 
    fontWeight:'bold',
    color:'white'
  }
})

export default CustomButton;
