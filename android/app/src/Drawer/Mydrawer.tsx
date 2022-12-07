import React, { useState } from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Register from "../component/register.component/register";
import Login from "../component/login.component/login";
import Second from "../component/second.component/Second";


const Drawer = createDrawerNavigator();
const Mydrawer =() =>{
  return(
    <>
     <Drawer.Navigator useLegacyImplementation>
     
      <Drawer.Screen name="Second" component={Second} />
    
    </Drawer.Navigator>
    
    </>
  )
}

export default Mydrawer;