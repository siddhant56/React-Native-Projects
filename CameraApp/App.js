import * as  React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./screens/HomeScreen"
import CameraScreen from "./screens/CameraScreen"
const Stack = createStackNavigator();

export default function App() {
  
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={HomeScreen} 
          options={{
            title:'My Home',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#b83227',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              color:"#fff",
            },
          }}
          />
          <Stack.Screen name="CameraScreen" component={CameraScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  
}