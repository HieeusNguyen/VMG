/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import * as React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import DesScreen from "./screens/DesScreen";
import ScanScreen from "./screens/ScanScreen";
import ImageAvailableScreen from "./screens/ImageAvailableScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
          <Stack.Navigator
              initialRouteName="HomeScreen"
              screenOptions={{ headerShown: false }}
          >
              <Stack.Screen name="HomeScreen" component={HomeScreen} />
              <Stack.Screen name="DesScreen" component={DesScreen} />
              <Stack.Screen name="ScanScreen" component={ScanScreen} />
              <Stack.Screen name="ImageAvailableScreen" component={ImageAvailableScreen} />
          </Stack.Navigator>
          <StatusBar barStyle="light-content" backgroundColor="#000" />
      </NavigationContainer>
  );
};

export default App;
