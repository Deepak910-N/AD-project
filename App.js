import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/login'; 
import HomeScreen from './screens/home';
import SelectScreen from './screens/select1';  
import VerifyScreen from './screens/verify';  
import UnderDevelopmentScreen from './screens/ud.js';  
import ProfileScreen from './screens/profile.js';
import AdminScreen from './screens/admin.js';
import { StyleSheet } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* All screens are part of the navigation stack */}
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Select" 
          component={SelectScreen} 
          
        />
        <Stack.Screen 
          name="Verify" 
          component={VerifyScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="UnderDev" 
          component={UnderDevelopmentScreen} 
        />
        <Stack.Screen 
          name="Profile" 
          component={ProfileScreen} 
           
        />
        <Stack.Screen 
          name="Admin" 
          component={AdminScreen} 
          options={{ headerShown: false }} 
           
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
