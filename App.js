import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Root } from 'native-base';
import Expo from "expo";

// Views
import InicioView from './src/views/Inicio';
import ChatView from './src/views/Chat';


const Menu = createStackNavigator(

  {
    Inicio : InicioView,
    Chat: ChatView,
  },
  {
    initialRouteName : 'Inicio',

    navigationOptions: {
      headerStyle: {
        backgroundColor : "#0288d1"
      },
      headerTintColor: '#fff',
    }
  }

);


export default() =>
  <Root>
      <Menu/>
  </Root>

    




