import React, { useState } from "react";
import { Text, StyleSheet, View, ScrollView, Image, TextInput, Button, Touchable, TouchableOpacity, Alert, ImageURISource } from "react-native";
import axios from "axios";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
//import { styles } from './HomeScreen.style';
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


   
  <Text>{props.route.params?.fname}</Text>
  <TouchableOpacity style={styles.bg}>
                <View style={styles.container}>
                    <Image style={styles.image} source={{uri:"https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/t9ur9cc1khkup1dmcbzd/%E0%B8%9A%E0%B8%B1%E0%B8%95%E0%B8%A3%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%AA%E0%B8%A7%E0%B8%99%E0%B8%AA%E0%B8%99%E0%B8%B8%E0%B8%81%E0%B9%84%E0%B8%AD%E0%B9%80%E0%B8%AD%E0%B9%87%E0%B8%A1%E0%B8%88%E0%B8%B5%E0%B9%80%E0%B8%A7%E0%B8%B4%E0%B8%A5%E0%B8%94%E0%B9%8C%E0%B8%AD%E0%B8%AD%E0%B8%9F%E0%B9%81%E0%B8%AD%E0%B8%94%E0%B9%80%E0%B8%A7%E0%B8%99%E0%B9%80%E0%B8%88%E0%B8%AD%E0%B8%A3%E0%B9%8C(IMGWorldsofAdventure).jpg"}} />


                    <View style={styles.textContainer}>
                        <Text style={styles.text}>
                            weqwe
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
    
    </>
  )
}
const styles = StyleSheet.create({
  bg:{ margin:10,},
  container : {
      width : '100%',
      height : 200,
      marginBottom : 25,
      borderRadius : 20,
      backgroundColor : '#FFFFFF',
      overflow : 'hidden',
      shadowRadius:10,
      shadowColor:,
      
  },

  image : {
      width : '100%',
      height : '80%'
  },

  textContainer : {
      flex : 1,
      alignItems : 'center',
      justifyContent : 'center'
  },

  text : {
      fontWeight : 'bold',
      fontSize : 20
  }
});

export default HomeScreen;