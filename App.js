import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

//SCREENS
import HomeScreen from "./src/screens/Home";
import ChatScreen from "./src/screens/Chat";

const AppNavigator = createStackNavigator({  
  Home : { screen: HomeScreen },
  Chat : { screen : ChatScreen }
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component<Props> {
  render() {
    return <AppContainer/>
  }
}
