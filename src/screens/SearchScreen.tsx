import React, { useLayoutEffect, useState } from "react";
import { View } from "../components/Themed";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import { SearchBar } from "../components/SearchBar";
import { TouchableOpacity } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

export default function SearchScreen({ navigation }: any) {
  const colorScheme = useColorScheme();
  const [searchText, setSearchText] = useState("");
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: (props: any) => (
        <SearchBar
          placeholder="Ara..."
          placeholderTextColor="white"
          value={searchText}
          onChangeText={(text: string) => {
            setSearchText(text);
          }}
          {...props}
        />
      ),
      headerRight: () => (
        <TouchableOpacity
          style={{ padding: 10, marginRight: 10 }}
          onPress={() => {
            setSearchText("");
          }}
        >
          {searchText.length !== 0 && (
            <EvilIcons size={24} name="close" color="white" />
          )}
        </TouchableOpacity>
      ),
    });
  }, [navigation, searchText]);
  return (
    <View
      style={{
       flex:1,
        backgroundColor: Colors[colorScheme].background,
      }}
    ></View>
  );
}
