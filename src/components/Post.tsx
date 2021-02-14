import React from "react";
import { Text, View } from "./Themed";
import { TouchableOpacity } from "react-native";
import { Video } from "expo-av";
import Layout from "../constants/Layout";
import { PostHeader } from "../components/PostHeader";
import IPost from "../interfaces/IPost";
import { useNavigation } from "@react-navigation/native";

export const Post = (props: any, post: IPost) => {
  const navigation=useNavigation();
  if (post.user) {
    return (
      <View
        style={{
          height: Layout.window.height / 2,
        }}
      >
        <PostHeader post={post} {...props} />

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("WatchVideoScreen");
          }}
        >
          <Video
            source={{
              uri: post.url,
            }}
            style={{
              width: Layout.window.width,
              height: Layout.window.height / 2 - 56,
            }}
            rate={1.0}
            volume={0.0}
            isMuted={true}
            resizeMode="cover"
            isLooping
            shouldPlay
            accessible={true}
          />
        </TouchableOpacity>

        <View
          style={{
            height: 40,
            backgroundColor: "red",
            width: Layout.window.width,
          }}
        >
          <Text>{post.description}</Text>
        </View>
      </View>
    );
  } else {
    return <View></View>;
  }
};
