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
        <MaterialCommunityIcons name="heart" color="red" size={40}/>
        <MonoText style={{fontWeight:"bold",fontSize:24}}>Filinta</MonoText>
      </View>
      <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-around"}}>
      <EvilIcons style={{padding:10}} name="search" color={Colors.light.tabIconDefault} size={24}/>
      </View>
    </View>
  );
}
