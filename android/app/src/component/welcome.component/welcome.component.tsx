import React, { useEffect } from 'react';
import { View, Text, Image, ScrollView, TextInput, StyleSheet } from 'react-native';
import { styles } from './welcome.style';

interface Welcome{
  navigation:any;
}
  
const Welcome =(props: Welcome) => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate("Login");
    }, 2000);
  }, []);

  return (
    <View style={styles.bg}>

      <View style={styles.center}>
        <Image style={styles.img} source={require('./img/logores.png')} />
      </View>
    </View>

  );
}


export default Welcome;