import React from "react";
import { Text, View } from "./Themed";
import { ImageBackground } from "react-native";
import { StyleSheet } from "react-native";
import Layout from "../constants/Layout";
import IPost from "../interfaces/IPost";
import { EvilIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export const Profile = (props: { post: IPost }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <ImageBackground
        source={{ uri: props.post.url }}
        imageStyle={{ borderRadius: 10, borderWidth: 1, borderColor: "red" }}
        style={{
          width: Layout.window.width - 20,
          height: Layout.window.height / 1.4,
          marginVertical: 20,
          borderRadius: 20,
          shadowOpacity: 0.5,
          shadowColor: "white",
          justifyContent: "flex-end",
        }}
      >
        <View
          style={{
            width: Layout.window.width - 30,
            flexDirection: "row",
            backgroundColor: "transparent",
            justifyContent: "space-between",
            paddingHorizontal: 10,
          }}
        >
          <View
            style={{ flexDirection: "column", backgroundColor: "transparent" }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "transparent",
              }}
            >
              <ImageBackground
                source={{
                  uri:
                    "https://media3.s-nbcnews.com/j/newscms/2019_41/3047866/191010-japan-stalker-mc-1121_06b4c20bbf96a51dc8663f334404a899.fit-2000w.JPG",
                }}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 50,
                  marginRight: 5,
                }}
                imageStyle={{
                  borderRadius: 50,
                  borderWidth: 3,
                  borderColor: "gray",
                }}
              />
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                DerinSu 19
              </Text>
              <MaterialCommunityIcons
                name="information"
                color="white"
                size={12}
              />
            </View>

            <View style={{ backgroundColor: "transparent" }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  backgroundColor: "transparent",
                }}
              >
                <View
                  style={{
                    width: 10,
                    height: 10,
                    backgroundColor: "limegreen",
                    borderRadius: 50,
                    marginRight: 5,
                  }}
                />
                <Text>Son zamanlarda aktif</Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  backgroundColor: "transparent",
                }}
              >
                <MaterialCommunityIcons
                  name="map-marker"
                  color="white"
                  size={12}
                />
                <Text>13 km uzakta</Text>
              </View>
            </View>
          </View>

          <View style={{ flexDirection: "row" }}>
            <View>
              <Text>msg</Text>
            </View>
            <View>
              <Text>like</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    textAlign: "center",
    fontWeight: "500",
    margin: 10,
  },
  segmentContainer: {
    marginBottom: 10,
  },
  segmentSection: {
    marginBottom: 25,
  },
  container: {
    paddingTop: 80,
  },
});
