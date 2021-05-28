import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Alert,
  TouchableOpacity,
  Image,
} from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class WelcomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      emailId: '',
      password: '',
    };
  }

  userSignUp = (email, password) => {
    console.log(email,password)
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        Alert.alert('User Added Sussesfully');

        // Signed in
        var user = userCredential.user;
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        return Alert.alert(errorMessage);
        // ..
      });
  };

  userLogin = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert(' Sussesfully Login');

      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        return Alert.alert(errorMessage);
        // ..
      });
  };
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.subContainer1}>
                 <Text style={styles.title}>Batter App</Text>
             <Image source = { require("../assets/icon.png")} style={styles.image} />
          <TextInput
            placeholder="abcd@example.com"
            keyboardType="email-address"
            style={styles.loginBox}
            onChangeText={(text) => {
              this.setState({ emailId: text });
            }}></TextInput>

          <TextInput
            placeholder="Enter Password"
            style={styles.loginBox}
            secureTextEntry={true}
            onChangeText={(text) => {
              this.setState({ password: text });
            }}></TextInput>

        </View >

    <View style={styles.subContainer2}>

          <TouchableOpacity
            style={[styles.button, { marginBottom: 20, marginTop: 20 }]}
                onPress={() => {
              this.userLogin(this.state.emailId, this.state.password);
            }}
            >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, { marginBottom: 20, marginTop: 20 }]}
            onPress={() => {
              this.userSignUp(this.state.emailId, this.state.password);
            }}>
            <Text style={styles.buttonText}>SingUp</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
       backgroundColor:'#222831'
  },
  subContainer1:{
    flex:0.6,
    justifyContent:'center',
    alignItems:'center'
  },
  subContainer2:{
    flex:0.4,
    alignItems:'center'
    
  },
  title: {
    marginTop:10,
      fontWeight:"normal",
    fontSize:60,
    padding:25,
    color:'#eeeeee',
    fontFamily: 'Times New Roman',
  },
  loginBox: {
    width:"70%",
    height: "10%",
    borderWidth:2,
    borderColor:'#ffff',
    padding:10,
    marginBottom:10,
    borderRadius:10,
    marginTop:20,
     justifyContent:'center',
    alignItems:'center'
  },

  button: {
   width:"70%",
    height:"20%",
    alignItems:'center',
    borderWidth:2,
    borderColor:'#eeeeee',
    borderRadius:15,
    backgroundColor: '#00ADB5',
    padding:10,
    
 
  },


  buttonText: {
    color: '#ffff',
    fontWeight: '200',
    fontSize: 20,
  },

    image:{
    width:"30%",
    height:"30%",
    padding:10,
    borderWidth:5,
    borderColor:'#ffff',
    borderRadius:20
  },


});
