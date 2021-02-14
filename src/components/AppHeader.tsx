import React from "react";
import { StackHeaderTitleProps } from "@react-navigation/stack";
import {EvilIcons, MaterialCommunityIcons} from "@expo/vector-icons"
import { MonoText } from "./StyledText";
import { View } from "./Themed";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";


export default function AppHeader(props: StackHeaderTitleProps) {
  const colorScheme = useColorScheme();
  return (
    <View style={{ height:56,flexDirection:"row",alignItems:"center",justifyContent:"space-between",backgroundColor:Colors[colorScheme].background}}>
      <View style={{flexDirection:"row",justifyContent:"flex-start",alignItems:"center"}}>
        <MaterialCommunityIcons name="youtube" color="red" size={32}/>
        <MonoText style={{fontWeight:"bold",fontSize:24}}>YouTube</MonoText>
      </View>
      <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-around"}}>
      <MaterialCommunityIcons style={{padding:10}} name="cast" color={Colors.light.tabIconDefault} size={24}/>
      <EvilIcons style={{padding:10}} name="bell" color={Colors.light.tabIconDefault} size={24}/>
      <EvilIcons style={{padding:10}} name="search" color={Colors.light.tabIconDefault} size={24}/>
      </View>
    </View>
  );
}
