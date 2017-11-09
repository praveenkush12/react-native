import React, { Component } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Login from './Login'

var styles = StyleSheet.create({
    wrapper: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:  'white',
    },
    title:{
        color: 'darkblue',
        fontSize: 30,
        fontWeight: 'bold'
    },
    logo:{
      justifyContent: 'center',
      alignItems: 'center',
      width: 200,
      height: 100
  }
});

export default class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
        timePassed: false,
    };
}

  componentDidMount() {
    setTimeout( () => {
        this.setTimePassed();
    },3000);
  }
  setTimePassed() {
    this.setState({timePassed: true});
  }

  static navigationOptions = {
    title: 'MainNav'
  };

  render() {
   
    if (!this.state.timePassed) {
      return (
        <View style={styles.wrapper}>
      <Image style={styles.logo}
              source ={require('../src/images/mybank.png')} /> 
      
      </View>
    );
  } else {
      return <Login/>;
  }
   
  }
}

export const SimpleApp = StackNavigator({
  MainNav: { screen: Main },
  LoginNav: { screen: Login },
});