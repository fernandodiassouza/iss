import { StyleSheet, Text, View, } from 'react-native';
import * as React from "react";
import 'react-native-gesture-handler'; //descomentado
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import ISSLocationScreen from './screens/ISS';
import MeteoroScreen from './screens/Meteoro_de_pegasus';  
import HomeScreen from './screens/Home';


const Stack=createStackNavigator()

export default function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
       <Stack.Screen name="Home" component={HomeScreen} />
       <Stack.Screen name="Iss" component={ISSLocationScreen} />
       <Stack.Screen name="Meteoro" component={MeteoroScreen} />
     </Stack.Navigator>
   </NavigationContainer>
  );
}

