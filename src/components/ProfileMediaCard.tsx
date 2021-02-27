import React, { useState } from "react";
import { Text, View } from "./Themed";
import { ImageBackground } from "react-native";
import { Modal, TouchableOpacity } from "react-native";
import Layout from "../constants/Layout";
import IPost from "../interfaces/IPost";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";

export const ProfileMediaCard = (props: { post: IPost }) => {
  const colorScheme = useColorScheme();
  return (
    <TouchableOpacity
      style={{
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        paddingHorizontal: 10,
      }}
    >
      <ImageBackground
        source={{ uri: props.post.url }}
        imageStyle={{ borderRadius: 10, borderWidth: 0.5, borderColor: "gold" }}
        style={{
          width: Layout.window.width / 4,
          height: Layout.window.height / 5,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            backgroundColor: Colors[colorScheme].primarycontrastText,
            borderRadius: 10,
            margin: 3,
            padding: 3,
          }}
        >
          22 Ocak 2020
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};
