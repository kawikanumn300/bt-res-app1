import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import App from "../../../../App";
import Welcome from "../component/welcome.component/welcome.component";
import Login from "../component/login.component/login";
import Register from "../component/register.component/Register";
import Mainmenu from "../component/mainmenu.component/HomeScreen";
import HomeScreen from "../component/mainmenu.component/HomeScreen";



const { Navigator, Screen } = createNativeStackNavigator();
const AppNavigator = () => (
    <NavigationContainer>
        <Navigator initialRouteName="Welcome">
            <Screen options={{ headerShown: false }} name="Welcome" component={Welcome}></Screen>
            <Screen options={{ headerShown: false }} name="Login" component={Login}></Screen>
            <Screen options={{ headerShown: false }} name="Register" component={Register}></Screen>
            <Screen options={{ headerShown: false }} name="HomeScreen" component={HomeScreen}></Screen>
        </Navigator>
    </NavigationContainer>
)
export default AppNavigator;