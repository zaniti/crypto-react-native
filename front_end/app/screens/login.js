import React, { useState } from 'react'
import { Button, StyleSheet, Text, View, Dimensions, TextInput, Image } from 'react-native';
const {height, width} = Dimensions.get('screen');
import firebase from '../config'
import { useHistory } from 'react-router';


const Login = () => {

  const history = useHistory()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function clearInputs () {
    setEmail('')
    setPassword('')
  }

  function authEmail () {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      history.push('/')
      //console.log(user)
    })
    .catch((error) => {
      var errorCode = error.code;
      console.log(errorCode);
      var errorMessage = error.message;
      console.log(errorMessage);
      alert(errorMessage)
  });  
  }

  function tologin () {
    history.push("/")
  }
    return (
      <View style={styles.container}>
              <Image
              source = {
                {uri: 'https://www.pngkit.com/png/detail/7-78507_bitcoin-png-bitcoin-logo-transparent-background.png'}
              }
              style={styles.img}
                />
        <Text style={styles.head}>Registration : </Text>
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
          title="Register"
          style={styles.btn}
          onPress={authEmail}
          />
          <Button
                style={styles.btn2}
                title="Login"
                onPress={tologin}
                />
        </View>
      </View>
    );
};

export default Login;

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
  },
  Button : {
    borderRadius : 10
  },
  inp : {
    width : width / 1.2,
    backgroundColor: 'white',
    borderRadius : 10,
    marginTop : 100,
    padding : 40,
    borderWidth : 2,
    marginTop : 20,
    padding : 10,
    borderColor : "gray",
    borderWidth : 2,
  },
  con : {
    paddingTop : 20
  }
});