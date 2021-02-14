import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import HomeScreen from "../screens/HomeScreen";
import {
  BottomTabParamList,
  DiscoverParamList,
  HomeParamList,
  LibraryParamList,
  ShareParamList,
  SubscriptionsParamList,
} from "../types";
import DiscoverScreen from "../screens/DiscoverScreen";
import ShareScreen from "../screens/ShareScreen";
import SubscriptionsScreen from "../screens/SubscriptionsScreen";
import LibraryScreen from "../screens/Libraryscreen";
import WatchVideoScreen from "../screens/WatchVideoScreen";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].tint,
        tabStyle: { backgroundColor: Colors[colorScheme].background },
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon size={16} name="home" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Discover"
        component={DiscoverNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon size={16} name="compass" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Share"
        component={ShareNavigator}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <TabBarIcon size={32} name="plus-circle-outline" color={color} />
          ),
          tabBarVisible: false,
        }}
      />
      <BottomTab.Screen
        name="Subscriptions"
        component={SubscriptionsNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon size={16} name="youtube-subscription" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Library"
        component={LibraryNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon size={16} name="play-box-multiple" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  color: string;
  size: number;
}) {
  return <MaterialCommunityIcons style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<HomeParamList>();
function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="WatchVideoScreen"
        component={WatchVideoScreen}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
}

const DiscoverStack = createStackNavigator<DiscoverParamList>();
function DiscoverNavigator() {
  return (
    <DiscoverStack.Navigator>
      <DiscoverStack.Screen
        name="DiscoverScreen"
        component={DiscoverScreen}
        options={{ headerTitle: "Tab Two Title" }}
      />
    </DiscoverStack.Navigator>
  );
}

const ShareStack = createStackNavigator<ShareParamList>();
function ShareNavigator() {
  return (
    <ShareStack.Navigator>
      <ShareStack.Screen
        name="ShareScreen"
        component={ShareScreen}
        options={{ headerShown: false }}
      />
    </ShareStack.Navigator>
  );
}

const SubscriptionsStack = createStackNavigator<SubscriptionsParamList>();
function SubscriptionsNavigator() {
  return (
    <SubscriptionsStack.Navigator>
      <SubscriptionsStack.Screen
        name="SubscriptionsScreen"
        component={SubscriptionsScreen}
        options={{ headerTitle: "Tab Two Title" }}
      />
    </SubscriptionsStack.Navigator>
  );
}

const LibraryStack = createStackNavigator<LibraryParamList>();
function LibraryNavigator() {
  return (
    <LibraryStack.Navigator>
      <LibraryStack.Screen
        name="LibraryScreen"
        component={LibraryScreen}
        options={{ headerTitle: "Tab Two Title" }}
      />
    </LibraryStack.Navigator>
  );
}
