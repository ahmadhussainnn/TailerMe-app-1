import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View, Button } from 'react-native';
import icon from 'react-native-vector-icons/Ionicons';
import { NOTIFICATION, ORDER, PAYMENT, PROFILE } from '../constants/routeNames';
import ProfileScreen from '../screens/Profile';
import OrderScreen from '../screens/Order';
import NotificationScreen from '../screens/Notification';
import PaymentScreen from '../screens/Payment';





const HomeNavigator = () => {

    const HomeStack = createStackNavigator();

    return (
        <HomeStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#009387',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }} initialRouteName="Home">
            <HomeStack.Screen name={PROFILE} component={ProfileScreen}></HomeStack.Screen>
            <HomeStack.Screen name={ORDER} component={OrderScreen}></HomeStack.Screen>
            <HomeStack.Screen name={NOTIFICATION} component={NotificationScreen}></HomeStack.Screen>
            <HomeStack.Screen name={PAYMENT} component={PaymentScreen}></HomeStack.Screen>

        </HomeStack.Navigator>
    );
};

export default HomeNavigator;