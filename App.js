import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View, AsyncStorage } from "react-native";
import AccountScreen from "./src/screens/AccountScreen";
import SignInScreen from "./src/screens/SignInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import { navigationRef, isMountedRef } from "./src/rootNav/RootNavigation";
import {
  Context as AuthContext,
  Provider as AuthProvider
} from "./src/context/authContext";
import { Provider as LocationProvider } from "./src/context/locationContext";
import { Provider as TracksProvider } from "./src/context/tracksContext";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({});

const TrackListFlow = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: "",
          header: () => null
        }}
        name="Track List"
        component={TrackListScreen}
      />
      <Stack.Screen
        options={{
          title: "",
          header: () => null
        }}
        name="Track Details"
        component={TrackDetailScreen}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  React.useEffect(() => {
    isMountedRef.current = true;
    return () => (isMountedRef.current = false);
  }, []);

  return (
    <AuthProvider>
      <LocationProvider>
        <TracksProvider>
          <NavigationContainer ref={navigationRef}>
            <AuthContext.Consumer>
              {value =>
                !value.state.token ? (
                  <Stack.Navigator initialRouteName="Sign Up">
                    <Stack.Screen
                      name="Sign Up"
                      options={{
                        title: "",
                        header: () => null
                      }}
                      component={SignUpScreen}
                    />
                    <Stack.Screen
                      name="Sign In"
                      options={{
                        title: "",
                        header: () => null
                      }}
                      component={SignInScreen}
                    />
                  </Stack.Navigator>
                ) : (
                  <Tab.Navigator
                    initialRouteName="Tracks"
                    backBehavior="history"
                  >
                    <Tab.Screen
                      name="Create Track"
                      component={TrackCreateScreen}
                    />
                    <Tab.Screen name="Tracks" component={TrackListFlow} />
                    <Tab.Screen name="Account" component={AccountScreen} />
                  </Tab.Navigator>
                )
              }
            </AuthContext.Consumer>
          </NavigationContainer>
        </TracksProvider>
      </LocationProvider>
    </AuthProvider>
  );
}
