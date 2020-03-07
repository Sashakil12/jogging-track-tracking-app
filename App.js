import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react-native";
import AccountScreen from "./src/screens/AccountScreen";
import SignInScreen from "./src/screens/SignInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const styles = StyleSheet.create({});

export default function App() {
  const auth = true;
  return (
    <NavigationContainer>
      {!auth ? (
        <Stack.Navigator initialRouteName="Sign In">
          <Stack.Screen name="Sign Up" component={SignUpScreen} />
          <Stack.Screen name="Sign In" component={SignInScreen} />
        </Stack.Navigator>
      ) : (
        <Tab.Navigator initialRouteName="Track Details">
          <Tab.Screen name="Create Track" component={TrackCreateScreen} />
          <Tab.Screen name="Track Details" component={TrackDetailScreen} />
          <Tab.Screen name="Track List" component={TrackListScreen} />
          <Tab.Screen name="Account" component={AccountScreen} />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
}
