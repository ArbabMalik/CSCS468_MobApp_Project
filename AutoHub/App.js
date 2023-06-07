import React from "react";
import {
  StyleSheet,
  Text,
  StatusBar,
  Button,
  TouchableWithoutFeedback,
  Alert,
  View,
  SafeAreaView,
  Image,
  Platform,
  Dimensions,
} from "react-native";

import Signin from "./Components/Signin.js";
import Signup from "./Components/Signup.js";
import Filter from "./Components/Filter.js";
import NewAd from "./Components/NewAd.js";
import Settings from "./Components/Settings.js";
import Myads from "./Components/Myads.js";
import Favorites from "./Components/Favorites.js";
import Burger from "./Components/Burger.js";
import Main from "./Components/Main.js";
import Descp from "./Components/Descp.js";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Burger" component={Burger} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Myads" component={Myads} />
        <Stack.Screen name="Favorites" component={Favorites} />
        <Stack.Screen name="Filter" component={Filter} />
        <Stack.Screen name="Descp" component={Descp} />
        <Stack.Screen name="NewAd" component={NewAd} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
