import React, { Component } from 'react';
import {StyleSheet, Text, TextInput, 
    View, TouchableOpacity,  Image} from 'react-native';
import { StackNavigator } from 'react-navigation';

//import Button from 'react-native-button';
import Main from './main'


var styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 50,
  },
  form: {
    alignItems: 'center',  
    marginTop: 50,
  },
  input:{
      width: 250,
      height: 30,
      backgroundColor: 'rgb(174, 214, 241)',
      marginTop: 10,
  },
  btnCon:{
    backgroundColor: 'white',
    paddingVertical: 15,
},
btn:{
  width: 250,
  height: 35,
  backgroundColor: '#085DA9',
  color: '#FFF',
  textAlign: 'center',
  fontWeight: 'bold',
  paddingVertical: 8,
},
OptCon: {
  marginTop: 50,
},
options:{
  width: 200,
  height: 30,
},
lineStyle:{
  borderBottomColor: '#808080',
  borderBottomWidth: 1,
  width: 300,
},
textStyle:{
  color: '#3498DB',
  textAlign: 'left',
  width: 300,
  height: 35,
  paddingVertical: 8
},
});


export default class LoginForm extends Component {

    render () {
      
       return (
         <View style={styles.container}>
            <TextInput 
            placeholder = "User Name"
            style = {styles.input} 
            />
            <TextInput 
            placeholder = "Password"
            style = {styles.input} 

            />
            <TouchableOpacity  style = {styles.btnCon}>
              <Text style = {styles.btn}>Login</Text>
            </TouchableOpacity> 
              <View style={styles.OptCon}>
              <View style = {styles.lineStyle}></View>
              <Text style={styles.textStyle}>Forgot username or password</Text>
              <View style = {styles.lineStyle}></View>
              <Text style={styles.textStyle}>Activate your account</Text>
              <View style = {styles.lineStyle}></View>
              <Text style={styles.textStyle}>New cardmembers - Setup online access</Text>
              <View style = {styles.lineStyle}></View>
              <Text style={styles.textStyle}>Privacy policy</Text>
              <View style = {styles.lineStyle}></View>
              </View>
         </View>
       ); 
      }
    
    
  }

 