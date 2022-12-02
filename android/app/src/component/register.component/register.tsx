import React, { useState } from "react";
import { Text, StyleSheet, View, ScrollView, Image, TextInput, Button, Touchable, TouchableOpacity, Alert } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { ReloadInstructions } from 'react-native/Libraries/NewAppScreen';
// import Register from "./register";
import axios from "axios";
import { styles } from './register.style';
import Login from "../login.component/login";

interface LoginScreenPorps {
    navigation: any;
}

const Register = (props: LoginScreenPorps) => {
    const [isSecureEtry, setIsSecureEtry] = useState(true)
    const [isSecureEtry1, setIsSecureEtry1] = useState(true)
    const login = () => props.navigation.navigate("login");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const Clickregister = () => {
        if (email == "" || password == "") {
            Alert.alert(
                "Alert",
                "โปรดกรอกข้อมูลให้ครบทุกช่อง",
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

        else {
            axios.post('http://192.168.10.144/intern-api-farm/api/InternFarmUser/login', {
                USER_EMAIL: email,
                USER_PASSWORD: password
            })
                .then(function (response) {
                    if (response.data.IsSuccess == true) {
                        props.navigation.navigate("Test", { name: response.data.Value });
                    }
                    else if (response.data.IsSuccess == false) {
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
                    paddingTop: 150,
                    fontFamily: 'Mali-Regular',
                }}>
                    Sign up</Text>

            </View>
            <View style={styles.containertopbar}>
                <View style={{ flexDirection: "row" }}>
                    <View style={styles.rowsearchSection}>
                        <TextInput
                            placeholderTextColor="#C2C3C4"
                            style={styles.input}
                            placeholder="FirstName"
                            underlineColorAndroid="transparent"
                        />
                    </View>
                    <View style={styles.rowsearchSection}>
                        <TextInput
                            placeholderTextColor="#C2C3C4"
                            style={styles.input}
                            placeholder="Last Name"
                            underlineColorAndroid="transparent"
                        />
                    </View>
                </View >
                <View style={{ height: 20, width: 40, }}></View>
                <View style={styles.searchSection}>
                    <Icon style={styles.searchIcon} name="" size={15} color="#5CC3FD" />
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
                    <Icon style={styles.searchIcon} name="" size={15} color="#5CC3FD" />
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
                <View style={{ height: 20, width: 40, }}></View>
                <View style={styles.searchSection}>
                    <Icon style={styles.searchIcon} name="" size={15} color="#5CC3FD" />
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: 250, }}>
                        <TextInput
                            placeholderTextColor="#C2C3C4"
                            style={styles.input}
                            secureTextEntry={isSecureEtry1}
                            placeholder="ConfirmPassword"
                            underlineColorAndroid="transparent"

                        />
                        <TouchableOpacity style={{ alignItems: 'center', }} onPress={() => {
                            setIsSecureEtry1((prev) => !prev)
                        }}>
                            <Text style={{
                                alignItems: 'center',
                                paddingTop: 15,
                                paddingRight: 0,
                                paddingBottom: 10,
                                paddingLeft: 0,
                                color: '#C2C3C4',
                            }}>{isSecureEtry1 ? 'Show' : 'Hide'}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ height: 20, width: 40, }}></View>
                <View style={styles.searchSection}>
                    <Icon style={styles.searchIcon} name="" size={15} color="#5CC3FD" />
                    <TextInput
                        placeholderTextColor="#C2C3C4"
                        style={styles.input}
                        placeholder="E-mail"
                        underlineColorAndroid="transparent"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                </View>
                <View style={{ height: 20, width: 40, }}></View>
                <View style={styles.searchSection}>
                    <Icon style={styles.searchIcon} name="" size={15} color="#5CC3FD" />
                    <TextInput
                        placeholderTextColor="#C2C3C4"
                        style={styles.input}
                        placeholder="Phone"
                        underlineColorAndroid="transparent"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                </View>


                <View style={{ height: 50, }}>
                </View>
                <View style={styles.center}>
                    <TouchableOpacity

                        style={styles.button}
                        onPress={Clickregister}
                    >
                        <Text style={{
                            fontSize: 20,
                            lineHeight: 25,
                            fontWeight: 'bold',
                            letterSpacing: 0.5,
                            color: 'white',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>ลงทะเบียน</Text>
                    </TouchableOpacity>

                    <View style={styles.footersection}>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={styles.label}>
                                ยกเลิกการลงทะเบียน
                            </Text>
                            <Text style={styles.lable2} onPress={login}>
                                กลับสู่หน้า login
                            </Text>
                            <View>
                            </View>
                        </View>
                    </View>

                </View>





            </View>

        </View>

    );
};


export default Register;