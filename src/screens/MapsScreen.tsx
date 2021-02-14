import * as React from "react";
import MapView from "react-native-maps";
import { StyleSheet, Dimensions } from "react-native";
import { Text, View } from "../components/Themed";

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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
