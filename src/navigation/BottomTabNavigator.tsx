import * as React from "react";
import { MaterialCommunityIcons, EvilIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import HomeScreen from "../screens/HomeScreen";
import {
  BottomTabParamList,
  HomeParamList,
  ShareParamList,
  MapsParamList,
  NotificationParamList,
  ProfileParamList,
} from "../navigation/Types";
import ShareScreen from "../screens/ShareScreen";
import Layout from "../constants/Layout";
import { View, ImageBackground } from "react-native";
import MapsScreen from "../screens/MapsScreen";
import NotificationScreen from "../screens/NotificationScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SearchScreen from "../screens/SearchScreen";
import { TouchableOpacity } from "react-native";
import { MonoText } from "../components/StyledText";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].background,
        tabStyle: {
          backgroundColor: Colors[colorScheme].bottomTabsBg,
          marginBottom: 5,
        },
        showLabel: false,
        inactiveTintColor: Colors[colorScheme].tabIconDefault,
        style: {
          backgroundColor: Colors[colorScheme].background,
          borderTopWidth: 0,
          height: 80,
        },
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <TabBarIcon
              size={focused ? Layout.tabIconBigSize : Layout.tabIconSmallSize}
              name="human-male-female"
              color={focused ? "red" : color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Maps"
        component={MapsNavigator}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <TabBarIcon
              size={focused ? Layout.tabIconBigSize : Layout.tabIconSmallSize}
              name="map-marker"
              color={focused ? "#4285F4" : color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Share"
        component={ShareNavigator}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused, color }) => (
            <TabBarIcon
              size={focused ? Layout.tabIconBigSize : Layout.tabIconSmallSize}
              name="plus-circle-outline"
              color={focused ? "#4caf50" : color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Notification"
        component={NotificationNavigator}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <TabBarIcon
              size={focused ? Layout.tabIconBigSize : Layout.tabIconSmallSize}
              name="heart"
              color={focused ? "red" : color}
            />
          ),
          tabBarBadge: 47,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <ImageBackground
              source={{
                uri:
                  "https://media3.s-nbcnews.com/j/newscms/2019_41/3047866/191010-japan-stalker-mc-1121_06b4c20bbf96a51dc8663f334404a899.fit-2000w.JPG",
              }}
              style={{
                width: focused ? 60 : 30,
                height: focused ? 60 : 30,
                borderRadius: 50,
              }}
              imageStyle={{
                borderRadius: 50,
                borderWidth: focused ? 3 : 1,
                borderColor: "gray",
              }}
            />
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
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.dark.text,
        borderRadius: 50,
        width: props.size * 2,
        height: props.size * 2,
        borderWidth: 1,
        borderColor: "gray",
      }}
    >
      <MaterialCommunityIcons style={{ marginBottom: -3 }} {...props} />
    </View>
  );
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<HomeParamList>();
function HomeNavigator() {
  const colorScheme = useColorScheme();
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={({ navigation, route }) => ({
          headerTitle: "",
          headerStyle: { backgroundColor: Colors[colorScheme].background },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("HomeScreen");
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <MaterialCommunityIcons name="heart" color="red" size={16} />
                <MaterialCommunityIcons
                  name="human-male-female"
                  color="red"
                  size={32}
                />
                <MaterialCommunityIcons name="heart" color="red" size={16} />
                <MonoText
                  style={{ fontWeight: "bold", fontSize: 24, color: "red" }}
                >
                  Filinta
                </MonoText>
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
              }}
              onPress={() => {
                navigation.navigate("SearchScreen");
              }}
            >
              <EvilIcons
                style={{ padding: 10 }}
                name="search"
                color={Colors.light.tabIconDefault}
                size={24}
              />
            </TouchableOpacity>
          ),
        })}
      />
      <HomeStack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={({ navigation, route }) => ({
          headerShown: true,
          headerStyle: { backgroundColor: Colors[colorScheme].background },
        })}
      />
    </HomeStack.Navigator>
  );
}

const MapsStack = createStackNavigator<MapsParamList>();
function MapsNavigator() {
  return (
    <MapsStack.Navigator>
      <MapsStack.Screen
        name="MapsScreen"
        component={MapsScreen}
        options={{ headerShown: false }}
      />
    </MapsStack.Navigator>
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

const NotificationStack = createStackNavigator<NotificationParamList>();
function NotificationNavigator() {
  return (
    <NotificationStack.Navigator>
      <NotificationStack.Screen
        name="NotificationScreen"
        component={NotificationScreen}
      />
    </NotificationStack.Navigator>
  );
}

const ProfileStack = createStackNavigator<ProfileParamList>();
function ProfileNavigator() {
  const colorScheme = useColorScheme();
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={({ navigation, route }) => ({
          headerShown: true,
          headerTitle: "",
          headerStyle: { backgroundColor: Colors[colorScheme].background },
          headerRight: () => (
            <TouchableOpacity
              style={{
                padding: 10,
                marginRight: 10,
                backgroundColor: Colors[colorScheme].softGrey,
                borderRadius: 50,
              }}
              onPress={() => {
                navigation.navigate("SettingScreen");
              }}
            >
              <MaterialCommunityIcons size={24} name="cog" color="white" />
            </TouchableOpacity>
          ),
        })}
      />
    </ProfileStack.Navigator>
  );
}
