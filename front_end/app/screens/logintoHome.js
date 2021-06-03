import React, { useState } from 'react'
import { Button, StyleSheet, Text, View, Dimensions, TextInput, Image } from 'react-native';
const {height, width} = Dimensions.get('screen');
import firebase from '../config'
import { useHistory } from 'react-router';

const LogintoHome = () => {
    const history = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function toInscription () {
      history.push("/Inscription")
    }

    function loginUser () {

        firebase.auth().signInWithEmailAndPassword(email, password)
          .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            history.push("/Home")
            // ...
        })
          .catch((error) => {
            var errorCode = error.code;
            console.log(errorCode);
            var errorMessage = error.message;
            console.log(errorMessage);
            alert(errorMessage)
        });  
    }

    return (
        <View style={styles.container}>
               <Image
              source = {
                {uri: 'https://www.pngkit.com/png/detail/7-78507_bitcoin-png-bitcoin-logo-transparent-background.png'}
              }
              style={styles.img}
                />
            <Text style={styles.head}>
              Connection :
            </Text>
            <TextInput
            style={styles.inp}
            placeholder={"Enter Your Email"}
            onChangeText={setEmail}
            />
            <TextInput
            style={styles.inp}
            placeholder={"Enter Your Password"}
            secureTextEntry
            onChangeText={setPassword}
            />
            <View style={styles.con}>
                <Button 
                style={styles.btn1}
                title="Connection"
                onPress={loginUser}
                />
                <Button
                style={styles.btn2}
                title="Register"
                onPress={toInscription}
                />
            </View>
        </View>
    )

}

export default LogintoHome;

const styles = StyleSheet.create({
    container : {
      flex: 1,
      backgroundColor: '#f6f6f6',
      alignItems: 'center',
      justifyContent: 'center',
    },
    img : {
      width: 130,
      height: 130,
  },
    head : {
      fontSize : 20,
      paddingTop : 2
    },
    inp : {
      width : width / 1.2,
      marginTop : 100,
      padding : 4,
      backgroundColor: 'white',
      borderWidth : 2,
      marginTop : 20,
      padding : 10,
      borderColor : "gray",
      borderWidth : 2,
      borderRadius : 10
    },
    con : {
      paddingTop : 20,

    }
});