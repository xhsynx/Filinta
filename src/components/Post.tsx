import React, { useState } from "react";
import { Text, View } from "./Themed";
import { ImageBackground } from "react-native";
import { Modal, TouchableOpacity } from "react-native";
import Layout from "../constants/Layout";
import IPost from "../interfaces/IPost";
import { EvilIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export const Post = (props: { post: IPost }) => {
  const navigation = useNavigation();
  const [profileModalVisible, setProfileModalVisible] = useState(false);
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
        imageStyle={{ borderRadius: 10 }}
        style={{
          width: Layout.window.width - 20,
          height: Layout.window.height / 1.4,
          marginVertical: 20,
          justifyContent: "flex-end",
          alignContent: "center",
          alignItems: "center",
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
          <TouchableOpacity
            onPress={() => setProfileModalVisible(!profileModalVisible)}
          >
            <View
              style={{
                flexDirection: "column",
                backgroundColor: "transparent",
              }}
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
                    borderColor: "#212121",
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
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            width: Layout.window.width - 30,
            flexWrap: "wrap",
            backgroundColor: "transparent",
          }}
        >
          {props.post.tags.map((tag) => {
            return (
              <TouchableOpacity
                key={tag}
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#212121",
                  borderRadius: 50,
                  padding: 8,
                  margin: 3,
                }}
              >
                <Text style={{ fontWeight: "bold" }}>{tag}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <TouchableOpacity
          style={{ marginBottom: -30 }}
          onPress={() => {
            //navigation.navigate("ProfileScreen");
          }}
        >
          <View style={{ backgroundColor: "transparent" }}>
            <MaterialCommunityIcons
              name="heart-multiple"
              color="#212121"
              size={60}
            />
          </View>
        </TouchableOpacity>
      </ImageBackground>
      <Modal
        animationType="slide"
        transparent
        visible={profileModalVisible}
        onRequestClose={() => {
          setProfileModalVisible(!profileModalVisible);
        }}
      >
        <View
          style={{
            height: Layout.window.height / 3,
            backgroundColor: "black",
            marginTop: "auto",
            borderTopLeftRadius: 50,
            borderTopRightRadius:50,
            paddingVertical: 30,
            paddingHorizontal: 20,
          }}
        >
          <TouchableOpacity
            style={{
              alignSelf: "flex-end",
              borderRadius: 50,
              borderWidth: 1,
              borderColor: "black",
              marginTop: -50,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "red",
            }}
            onPress={()=>{
              setProfileModalVisible(!profileModalVisible);
            }}
          >
            <MaterialCommunityIcons name="close" color="black" size={32} />
          </TouchableOpacity>
          <View style={{ backgroundColor: "transparent" }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>DerinSu 19</Text>
          </View>
          <View style={{flexDirection:"row", backgroundColor: "transparent" }}>
            <MaterialCommunityIcons
              name="gender-male-female"
              color="white"
              size={12}
              style={{marginRight:5}}
            />
            <Text>Kadın</Text>
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
                style={{marginRight:5}}
              />
              <Text>13 km uzakta</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              width: Layout.window.width - 30,
              flexWrap: "wrap",
              backgroundColor: "transparent",
            }}
          >
            {props.post.tags.map((tag) => {
              return (
                <TouchableOpacity
                  key={tag}
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#212121",
                    borderRadius: 50,
                    padding: 8,
                    margin: 3,
                  }}
                >
                  <Text style={{ fontWeight: "bold" }}>{tag}</Text>
                </TouchableOpacity>
              );
            })}
          </View>

          <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <TouchableOpacity
              style={{
                alignSelf: "center",
                borderRadius: 50,
                borderWidth: 1,
                borderColor: "aqua",
                margin: 3,
                padding: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MaterialCommunityIcons name="star" color="aqua" size={32} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                alignSelf: "center",
                borderRadius: 50,
                borderWidth: 1,
                borderColor: "red",
                margin: 3,
                padding: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MaterialCommunityIcons name="heart" color="red" size={32} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                alignSelf: "center",
                borderRadius: 50,
                borderWidth: 1,
                borderColor: "blue",
                margin: 3,
                padding: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MaterialCommunityIcons name="telegram" color="blue" size={32} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                alignSelf: "center",
                borderRadius: 50,
                borderWidth: 1,
                borderColor: "limegreen",
                margin: 3,
                padding: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MaterialCommunityIcons
                name="phone"
                color="limegreen"
                size={32}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              alignSelf: "center",
              height: 25,
              borderRadius: 50,
              borderWidth: 1,
              borderColor: "grey",
              margin: 20,
              padding: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>Kötüye Kullanım Bildir</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};
