import React from "react";
import { createNativeStackNavigator} from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import App from "../../../../App";
import welcome from "../component/welcome.component/welcome.component";
import Login from "../component/login.component/login";
import Register from "../component/register.component/register";



const{ Navigator, Screen } = createNativeStackNavigator();
const AppNavigator = () => (
    <NavigationContainer>
        <Navigator initialRouteName="Welcome">
            <Screen options={{headerShown:false}} name="Welcome" component={welcome}></Screen>
            <Screen options={{headerShown:false}} name="Login" component={Login}></Screen>
            <Screen options={{headerShown:false}} name="Register" component={Register}></Screen>
        </Navigator>
    </NavigationContainer>
)
export default AppNavigator;