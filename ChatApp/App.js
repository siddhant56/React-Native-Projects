import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Chat from './components/Chat';
import Home from './components/Home';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{
          title:"LCO CHAT ROOM",
          headerStyle:{
            backgroundColor:"#fd0759"
          },
          headerTintColor:"#FFF"
        }} />
        <Stack.Screen name="Chat" component={Chat} options={{
          title:"LCO CHAT ROOM",
          headerStyle:{
            backgroundColor:"#fd0759"
          },
          headerTintColor:"#FFF"
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

