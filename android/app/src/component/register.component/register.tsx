import React, { useState } from "react";
import { Text, StyleSheet, View, ScrollView, Image, TextInput, Button, Touchable, TouchableOpacity, Alert, ImageURISource } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { ReloadInstructions } from 'react-native/Libraries/NewAppScreen';
import axios from "axios";
import { styles } from './register.style';
import Login from "../login.component/login";
import ImagePicker, { ImageOrVideo } from 'react-native-image-crop-picker';
import { baseUrl } from "../setting";


interface LoginScreenPorps {
    navigation: any;

}
interface images {
    onChange?: (image: ImageOrVideo) => void;
    source: ImageURISource;
}

const Register = (props: LoginScreenPorps, props1: images) => {
    const [isSecureEtry, setIsSecureEtry] = useState(true)
    const [isSecureEtry1, setIsSecureEtry1] = useState(true)
    const login = () => props.navigation.navigate("Login");

    const [email, setEmail] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpwd, setConfirmpwd] = useState("");
    const [phone, setPhone] = useState("");
    const [img, setImg] = useState(props1.source?.uri || undefined);
    const [uri, setUri] = React.useState(props1.source?.uri || undefined);

    const pickPicture = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            setUri(image.path);
            setImg(image.filename);
            props1.onChange?.(image);
        });

    };

    const Clickregister = async () => {
        if (email == "" || firstname == "" || lastname == "" || username == "" || password == "" || confirmpwd == "" || phone == "") {
            Alert.alert(
                "Alert",
                "กรุณากรอก ให้ครับทุกช่อง",
                [
                    {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                    },
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
            );
            console.log("data is null");
        } else {
            if (password != confirmpwd) {
                Alert.alert(
                    "Alert",
                    "กรุณากรอก Password ให้ตรงกัน",
                    [
                        {
                            text: "Cancel",
                            onPress: () => console.log("Cancel Pressed"),
                            style: "cancel"
                        },
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                );
                console.log("password and confirmpassword not match");
                setConfirmpwd("");
                setPassword("");
            } else {

                // const formData = new FormData()
                // formData.append('USER_NAME', firstname)
                // formData.append('USER_LASTNAME', lastname)
                // formData.append('USER_EMAIL', email)
                // formData.append('USER_USERNAME', username)
                // formData.append('USER_PASSWORD', password)
                // formData.append('USER_PHONE_NUMBER', phone)
                // formData.append('USER_STATUS', "A")
                // formData.append('USER_RIGHTS', "U")
                const data = {
                    "USER_NAME": firstname,
                    "USER_LASTNAME": lastname,
                    "USER_EMAIL": email,
                    "USER_USERNAME": username,
                    "USER_PASSWORD": password,
                    "USER_PHONE_NUMBER": phone,
                    "USER_STATUS": "A",
                    "USER_RIGHTS": "U",
                }

                var config = {
                    method: 'post',
                    url:  baseUrl  + '/BtResUser',
                    headers: { 'Content-Type': 'application/json' },
                    data: data
                };

                await axios(config)
                    .then(function (response) {
                        if (response.data.IsSuccess == false) {
                            Alert.alert(
                                "Alert",
                                "ไม่สามารถสมัครสมาชิกได้ เนื่องจากชื่อผู้ใช้ซ้ำ",
                                [
                                    { text: "OK", onPress: () => console.log("OK Pressed") }
                                ]
                            );
                            console.log("Sign Up สำเร็จ");
                            setConfirmpwd("");
                            setPassword("");

                        } else if (response.data.IsSuccess == true) {
                            Alert.alert(
                                "Alert",
                                "Sign Up สำเร็จ ",
                                [
                                    { text: "OK", onPress: () => props.navigation.navigate("Login") }
                                ]
                            );
                            console.log("Sign Up สำเร็จ");

                        }
                        console.log((response.data));
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        }
    }
    return (

        <View style={styles.bg}>
            <ScrollView>
                <View style={styles.containertopbar}>
                    <Text style={{
                        fontSize: 28,
                        fontWeight: 'bold',
                        color: 'black',
                        paddingTop: 20,
                        fontFamily: 'Mali-Regular',
                    }}>
                </Text>
                </View>
                <View style={styles.container}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={styles.rowsearchSection}>
                            <TextInput
                                placeholderTextColor="#C2C3C4"
                                style={styles.inputname}
                                placeholder="FirstName"
                                underlineColorAndroid="transparent"
                                value={firstname}
                                onChangeText={(text) => setFirstname(text)}
                            />
                        </View>
                        <View style={styles.rowsearchSection}>
                            <TextInput
                                placeholderTextColor="#C2C3C4"
                                style={styles.inputname}
                                placeholder="Last Name"
                                underlineColorAndroid="transparent"
                                value={lastname}
                                onChangeText={(text) => setLastname(text)}
                            />
                        </View>
                    </View >
                    <View style={{ height: 20, width: 40, }}></View>
                    <View style={styles.searchSection}>
                        <TextInput
                            placeholderTextColor="#C2C3C4"
                            style={styles.input}
                            placeholder="Username"
                            underlineColorAndroid="transparent"
                            value={username}
                            onChangeText={(text) => setUsername(text)}
                        />
                    </View>
                    <View style={{ height: 20, width: 40, }}></View>
                    <View style={styles.searchSection}>
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
                            <TouchableOpacity style={{ alignItems: 'flex-end', /*borderWidth:1,*/}} onPress={() => {
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
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: 250, }}>
                            <TextInput
                                placeholderTextColor="#C2C3C4"
                                style={styles.input}
                                secureTextEntry={isSecureEtry1}
                                placeholder="ConfirmPassword"
                                underlineColorAndroid="transparent"
                                value={confirmpwd}
                                onChangeText={(text) => setConfirmpwd(text)}
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
                        <TextInput
                            placeholderTextColor="#C2C3C4"
                            style={styles.input}
                            placeholder="Phone"
                            underlineColorAndroid="transparent"
                            value={phone}
                            onChangeText={(text) => setPhone(text)}
                        />
                    </View>
                    <View style={{ height: 50, }}>
                    </View>
                    <View style={styles.center}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={Clickregister}>
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
                    </View>

                </View>
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


            </ScrollView>
        </View>

    );
};

export default Register;