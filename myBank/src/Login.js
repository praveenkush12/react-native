import React, { Component } from 'react';
import {StyleSheet, 
    Text, View,  Image} from 'react-native';
import { StackNavigator } from 'react-navigation';

//import Button from 'react-native-button';
import Main from './main'
import LoginForm from './LoginForm'

var styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logoCon: {
    alignItems: 'center',  
    marginTop: 35,
  },
  logo:{
      width: 200,
      height: 100
  }
});


export default class Login extends Component {
    static navigationOptions = {
        title: 'LoginNav',
      };

    // constructor(props) {
    //   super(props);
    //   this.state = {
    //     loggedIn: true
    //   };
    // }

    // logout () {
    //   CookieManager.clearAll((err, res) => {
    //     console.log(err);
    //     console.log(res);
    //   });
      
    //   this.setState({
    //     loggedIn: false,
    //   });
    // }

    render () {
      
       return (
         <View style={styles.container}>
          <View style={styles.logoCon}>   
             <Image style={styles.logo}
              source ={require('../src/images/mybank.png')} /> 
             </View>
                <View>
                <LoginForm />
                </View>
         </View>

       ); 
      }
    
    
  }

 