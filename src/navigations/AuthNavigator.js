import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View, Button } from 'react-native';
import icon from 'react-native-vector-icons/Ionicons';
import { LOGIN, SIGNUP } from '../constants/routeNames';
import LoginScreen from '../screens/Login';
import SignupScreen from '../screens/Signup';


const AuthNavigator = () => {

    const AuthStack = createStackNavigator();

    return (
        <AuthStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#009387',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}>
            <AuthStack.Screen name={LOGIN} component={LoginScreen}></AuthStack.Screen>
            <AuthStack.Screen name={SIGNUP} component={SignupScreen}></AuthStack.Screen>
        </AuthStack.Navigator>
    );
};

export default AuthNavigator;