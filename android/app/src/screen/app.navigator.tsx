import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useRoute } from "@react-navigation/native";
import { Text, StyleSheet, View, ScrollView, Image, TextInput, Button, Touchable, TouchableOpacity, Alert, ImageURISource } from "react-native";

import Welcome from "../component/welcome.component/welcome.component";
import Login from "../component/login.component/login";
import Mainmenu from "../component/mainmenu.component/HomeScreen";
import Register from "../component/register.component/register";

import Second from "../component/second.component/Second";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { RotateInUpLeft } from "react-native-reanimated";

const Drawer = createDrawerNavigator();
const Screen = createNativeStackNavigator();
const routea = useRoute();
const AppNavigator = () => (

    <Screen.Navigator initialRouteName="Welcome" >
        <Screen.Screen options={{ headerShown: false }} name="Welcome" component={Welcome}></Screen.Screen>
        <Screen.Screen options={{ headerShown: false }} name="Login" component={Login}></Screen.Screen>
        <Screen.Screen options={{ headerShown: false }} name="Register" component={Register}></Screen.Screen>
        <Screen.Screen options={({ route }) => ({ title: route.params?.fname })} name="Mainmenu" component={Mainmenu}></Screen.Screen>
    </Screen.Navigator>

)

export default AppNavigator;