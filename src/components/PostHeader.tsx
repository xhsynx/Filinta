import React from "react";
import Layout from "../constants/Layout";
import { View } from "./Themed";
import { ImageBackground } from "react-native";
import { Feather } from "@expo/vector-icons";
import { MonoText } from "./StyledText";
import Colors from "../constants/Colors";
import IPost from "../interfaces/IPost";

export const PostHeader = (post: IPost) => {
  return (
    <View
      style={{
        height: 56,
        width: Layout.window.width,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ImageBackground
          style={{
            width: 30,
            height: 30,
            backgroundColor: "gray",
            borderRadius: 50,
          }}
          source={{ uri: post.user.avatar }}
        />
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MonoText style={{ fontWeight: "bold", fontSize: 12 }}>
            {post.channel.name}
          </MonoText>
          <MonoText style={{ fontWeight: "bold", fontSize: 8 }}>
            3 days ago
          </MonoText>
        </View>
      </View>
      <View>
        <Feather
          name="more-vertical"
          color={Colors.light.tabIconDefault}
          size={24}
        />
      </View>
    </View>
  );
};
