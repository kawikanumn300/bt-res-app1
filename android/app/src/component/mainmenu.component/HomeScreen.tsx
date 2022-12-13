import React, { useState } from "react";
import { Text, StyleSheet, View, ScrollView, Image, TextInput, Button, Touchable, TouchableOpacity, Alert, ImageURISource
,SafeAreaView } from "react-native";
import axios from "axios";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { styles } from './HomeScreen.style';
import Mydrawer from "../../Drawer/Mydrawer";
import Second from "../second.component/Second";

interface HomeScreenPorps {
  [x: string]: any;
  navigation: any;
  route:any;
}



const HomeScreen =(props:HomeScreenPorps) =>{
  
  return(
    <>


   </>
    
    
  )
}

export default HomeScreen;
