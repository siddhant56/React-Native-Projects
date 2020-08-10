import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as firebase from 'firebase';
//import all screens
import HomeScreen from "./screens/HomeScreen";
import LoadingScreen from "./screens/LoadingScreen";
import SignupScreen from "./screens/SignupScreen";
import SigninScreen from "./screens/SigninScreen";


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

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loading">
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Loading" component={LoadingScreen}  screenOptions={{
    headerShown: false
  }}/>
        <Stack.Screen name="Signin" component={SigninScreen}/>
        <Stack.Screen name="Signup" component={SignupScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;