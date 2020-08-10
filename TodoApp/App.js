import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddTodos from "./screens/AddTodos";
import EditTodos from "./screens/EditTodos";
import FormScreen from './screens/FormScreen';
const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={AddTodos}>
        <Stack.Screen name="Your Todos" component={AddTodos}
        options={{
          headerTintColor:"#FFF",
          headerTitle:"Your Todos",
          headerStyle:{
            backgroundColor:"#7CEC9F"
          }
        }} />
        <Stack.Screen name="Edit" component={EditTodos} 
        options={{
          headerTintColor:"#000",
          headerStyle:{
            backgroundColor:"#7CEC9F"
          }
        }}
        />
        <Stack.Screen name="Form" component={FormScreen}
        options={{
          headerTintColor:"#000",
          headerStyle:{
            backgroundColor:"#7CEC9F"
          }
        }}
        />
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
