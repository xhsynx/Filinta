import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import Layout from "../constants/Layout";

export const SearchBar = (props: any) => {
  const colorScheme = useColorScheme();
  return (
    <View
      style={{
        backgroundColor: Colors[colorScheme].secondarymain,
        alignItems: "center",
      }}
    >
      <TextInput
        style={{
          backgroundColor: "#424242",
          height: 30,
          width: Layout.window.width / 1.2,
          borderRadius: 5,
          marginLeft: 30,
          textAlign:"left",
          paddingTop:5,
          color:"white"
        
        }}
        placeholderTextColor={props.placeholderTextColor}
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={(s) => props.onChangeText(s)}
      />
    </View>
  );
};



