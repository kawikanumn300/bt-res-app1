import React, { useState } from "react";
import { Text, StyleSheet, View, ScrollView, Image, TextInput, Button, Touchable, TouchableOpacity ,Alert} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { ReloadInstructions } from 'react-native/Libraries/NewAppScreen';
// import Register from "./register";
import axios from "axios";
import { styles } from './login.style';

interface LoginScreenPorps {
    navigation: any;
}

const Login = (props: LoginScreenPorps) => {
    
    const Register = () => props.navigation.navigate("register");
    const [isSecureEtry, setIsSecureEtry] = useState(true)

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    
    const  ClickLogin = ()=>{
      if(email=="" || password==""){
        Alert.alert(
          "Alert",
          "โปรดกรอกข้อมูลให้ครบทั้ง 2 ช่อง",
          [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel"
            },
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ]
        );
        console.log("email ro password is valid");
      }

      else{
      axios.post('http://192.168.10.144/intern-api-farm/api/InternFarmUser/login', {
        USER_EMAIL: email,
        USER_PASSWORD: password
      })
      .then(function (response) {
        if(response.data.IsSuccess == true){
          props.navigation.navigate("Test",{name:response.data.Value});
        }
        else if (response.data.IsSuccess == false ){
          Alert.alert(
            "Alert",
            "Email หรือ Password ผิด",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
          );
        }
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    };
    }
    return (
        <View style={styles.bg}>

            <View style={styles.containertopbar}>
                <Text style={{
                    fontSize: 28,
                    fontWeight: 'bold',
                    color: 'black',
                    paddingTop:150,
                    fontFamily:'Mali-Regular',
                }}>
                    Log In</Text>

            </View>
            <View style={styles.containertopbar}>
                <View style={{ height: 20, width: 40, }}></View>
                <View style={styles.searchSection}>
                    <Icon style={styles.searchIcon} name="user-alt" size={15} color="#5CC3FD" />
                    <TextInput
                        placeholderTextColor="#C2C3C4"
                        style={styles.input}
                        placeholder="Username"
                        underlineColorAndroid="transparent"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                </View>
                <View style={{ height: 20, width: 40, }}></View>
                <View style={styles.searchSection}>
                    <Icon style={styles.searchIcon} name="lock" size={15} color="#5CC3FD" />
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: 250, }}>
                    <TextInput
                        placeholderTextColor="#C2C3C4"
                        style={styles.input}
                        secureTextEntry={isSecureEtry}
                        placeholder="Password"
                        underlineColorAndroid="transparent"
                        value={password}
                        onChangeText={(text) => setPassword(text)}  
                    />
                    <TouchableOpacity style={{ alignItems: 'center', }} onPress={() => {
                        setIsSecureEtry((prev) => !prev)
                    }}>
                        <Text style={{
                            alignItems: 'center', 
                            paddingTop: 15,
                            paddingRight: 0,
                            paddingBottom: 10,
                            paddingLeft: 0,
                            color: '#C2C3C4',
                        }}>{isSecureEtry ? 'Show' : 'Hide'}</Text>
                    </TouchableOpacity>
                    </View>
                </View>
                <View style={{
                    marginTop:10,
                }}>
                    <Text style={styles.lable2}>ลืมรหัสผ่าน ?</Text>
                </View>
                    
                
                <View style={{ height: 50, }}>
                </View>
                <View style={styles.center}>
                <TouchableOpacity

                    style={styles.button}
                    onPress={ClickLogin}
                >
                    <Text style={{
                        fontSize: 20,
                        lineHeight: 25,
                        fontWeight: 'bold',
                        letterSpacing: 0.5,
                        color: 'white',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>เข้าสู่ระบบ</Text>
                </TouchableOpacity>
                </View>
                <View style={{ height: 130, }}>
                </View>

                <View style={styles.footersection}>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={styles.label}>
                            คุณยังไม่มีบัญชีใช่หรือไม่ ?
                        </Text>
                        <Text style={styles.lable2} onPress={Register}>
                            ลงทะเบียน
                        </Text>
                    </View>
                </View>


            </View>

        </View>

    );
};


export default Login;