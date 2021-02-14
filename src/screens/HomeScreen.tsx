import React, { useContext } from "react";
import { SafeAreaView, FlatList, StyleSheet, StatusBar } from "react-native";
import { Post } from "../components/Post";
import { StoreContext } from "../store/store";

export default function HomeScreen(props: any) {
  const { state } = useContext(StoreContext);
  console.log(state.posts)
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={state.posts}
        renderItem={({ item }) =>
           <Post key={item.id} post={item} {...props} />
        }
        keyExtractor={(post) => post.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
