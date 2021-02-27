import React from "react";
import { StackHeaderTitleProps } from "@react-navigation/stack";
import { EvilIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { MonoText } from "./StyledText";
import { View } from "./Themed";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function AppHeader(props: StackHeaderTitleProps) {
  const colorScheme = useColorScheme();
  const navigation = useNavigation();
  return (
    <View
      style={{
        height: 56,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: Colors[colorScheme].primarymain,
      }}
    >
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("HomeScreen");
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <MaterialCommunityIcons name="heart" color="red" size={16} />
          <MaterialCommunityIcons
            name="human-male-female"
            color="red"
            size={32}
          />
          <MaterialCommunityIcons name="heart" color="red" size={16} />
          <MonoText style={{ fontWeight: "bold", fontSize: 24, color: "red" }}>
            Filinta
          </MonoText>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
        onPress={() => {
          navigation.navigate("SearchScreen");
        }}
      >
        <EvilIcons
          style={{ padding: 10 }}
          name="search"
          color={Colors.light.secondarymain}
          size={24}
        />
      </TouchableOpacity>
    </View>
  );
}
