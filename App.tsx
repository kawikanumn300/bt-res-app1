import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, ScrollView, TextInput, StyleSheet} from 'react-native';
import Mydrawer from './android/app/src/Drawer/Mydrawer';
import AppNavigator from './android/app/src/screen/app.navigator';
const App = () => {
  return (
    <>
      <NavigationContainer >
        {/* <AppNavigator/> */}
        <AppNavigator  />
     
      </NavigationContainer>
      
    </>
  
  );
};


export default App;