import React, { useContext } from "react";
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Text, View } from "../components/Themed";
import { MaterialCommunityIcons, Fontisto } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import Layout from "../constants/Layout";
import { StoreContext } from "../store/store";
import { ProfileMediaCard } from "../components/ProfileMediaCard";

export default function ProfileScreen() {
  const { state } = useContext(StoreContext);
  const colorScheme = useColorScheme();
  return (
    <View style={styles.container}>
      <View style={{ height: Layout.window.height / 3 }}>
        <TouchableOpacity style={{ justifyContent: "center", alignItems: "center" }}>
          <ImageBackground
            source={{
              uri:
                "https://media3.s-nbcnews.com/j/newscms/2019_41/3047866/191010-japan-stalker-mc-1121_06b4c20bbf96a51dc8663f334404a899.fit-760w.JPG",
            }}
            imageStyle={{
              borderRadius: 50,
              borderWidth: 1,
              borderColor: Colors[colorScheme].softGrey,
            }}
            style={{
              width: 100,
              height: 100,
              marginVertical: 10,
            }}
          />
          <Text>Hüseyin, 27</Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              width: 60,
              height: 60,
              backgroundColor: Colors[colorScheme].text,
              borderRadius: 50,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <MaterialCommunityIcons
              size={32}
              name="camera-plus"
              color={Colors[colorScheme].softGrey}
            />
          </TouchableOpacity>
          <Text>MEDYA EKLE</Text>
        </View>
      </View>


      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "transparent",
        }}
      >
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            width: Layout.window.width - 20,
            height: 50,
            borderWidth:1,
            backgroundColor: Colors[colorScheme].softGrey,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 16,
              color: "white",
              marginHorizontal: 5,
            }}
          >
           GALERİ
          </Text>
          <MaterialCommunityIcons name="table-edit" size={32} color="white" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={state.posts}
        renderItem={({ item }) => (
          <ProfileMediaCard key={item.id} post={item} />
        )}
        horizontal
        style={{marginHorizontal:20,borderRadius:10,marginBottom:40}}
        showsHorizontalScrollIndicator
        indicatorStyle="white"
        keyExtractor={(post) => post.id}
      />

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          backgroundColor: "transparent",
          bottom: 5,
        }}
      >
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 50,
            width: Layout.window.width - 20,
            height: 50,
            backgroundColor: "gold",
          }}
        >
          <Fontisto name="fire" size={24} color="black" />
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              color: "black",
              marginHorizontal: 5,
            }}
          >
            FİLİNTA GOLD ÜYELİK
          </Text>
          <Fontisto name="fire" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
