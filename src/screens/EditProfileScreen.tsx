import { DrawerActions } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from '../components/Themed';

export default function EditProfileScreen({navigation}:any) {
  return (
    <View style={styles.container}>
             <TouchableOpacity
              style={{
                padding: 10,
                marginRight: 10,
                borderRadius: 50,
                height:50,width:50,
                backgroundColor:"red"
              }}
              onPress={() => {
                navigation.dispatch(DrawerActions.openDrawer());
              }}
            >
            </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
