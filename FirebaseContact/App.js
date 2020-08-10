
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import screens
import AddNewContact from "./screens/AddNewContact";
import EditContact from "./screens/EditContact";
import HomeScreen from "./screens/HomeScreen";
import ViewContact from "./screens/ViewContact";
//import firebase
import * as firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyBSz1bw_pQzGoUuYMHEXLJLd1iZIwxY7Js",
  authDomain: "reactbootcamp-739aa.firebaseapp.com",
  databaseURL: "https://reactbootcamp-739aa.firebaseio.com",
  projectId: "reactbootcamp-739aa",
  storageBucket: "reactbootcamp-739aa.appspot.com",
  messagingSenderId: "576353699269",
  appId: "1:576353699269:web:f8f3f663334fb11259f7ac",
  measurementId: "G-EM4N1550G4"
};


firebase.initializeApp(firebaseConfig);

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={HomeScreen}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="View" component={ViewContact} />
        <Stack.Screen name="Edit" component={EditContact} />
        <Stack.Screen name="Add" component={AddNewContact} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
