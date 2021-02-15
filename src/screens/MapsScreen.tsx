import * as React from "react";
import MapView from "react-native-maps";
import { StyleSheet, Dimensions } from "react-native";
import { Text, View } from "../components/Themed";
import Layout from "../constants/Layout";

export default function MapsScreen() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    flex:1,
    width: Layout.window.width,
    height: Layout.window.height
  },
});
