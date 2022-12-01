import React from "react";
import { createNativeStackNavigator} from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import App from "../../../../App";
import welcome from "../component/welcome.component/welcome.component";
import Login from "../component/login.component/login";
import register from "../component/register.component/register";


const{ Navigator, Screen } = createNativeStackNavigator();
const AppNavigator = () => (
    <NavigationContainer>
        <Navigator initialRouteName="welcome">
            <Screen options={{headerShown:false}} name="welcome" component={welcome}></Screen>
            <Screen options={{headerShown:false}} name="login" component={Login}></Screen>
            <Screen options={{headerShown:false}} name="register" component={register}></Screen>
        </Navigator>
    </NavigationContainer>
)
export default AppNavigator;