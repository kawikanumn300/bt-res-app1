import React, { useEffect } from 'react';
import { View, Text, Image, ScrollView, TextInput, StyleSheet } from 'react-native';
import { styles } from './welcome.style';

interface Welcome{
  navigation:any;
}
  
const welcome =(props: Welcome) => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate("login");
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


export default welcome;