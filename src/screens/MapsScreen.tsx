import * as React from "react";
import MapView from "react-native-maps";
import { StyleSheet, Dimensions } from "react-native";
import { Text, View } from "../components/Themed";
import Layout from "../constants/Layout";

export default function MapsScreen() {
  return (
    <View style={styles.container}>
      <MapView
        provider="google"
        style={styles.map}
        region={{
          latitude: 0,
          longitude: 0,
          latitudeDelta: 0,
          longitudeDelta: 30,
        }}
        zoomEnabled={true}
        showsUserLocation={true}
        zoomTapEnabled={true}
      />
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
    flex: 1,
    width: Layout.window.width,
    height: Layout.window.height,
  },
});
