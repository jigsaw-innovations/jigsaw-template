import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import AppNavigator from './AppNavigator';
import HomeStackScreen from './HomeStack';

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  labelStyle: {
    fontSize: 12,
  },
  tabBarStyle: {
    backgroundColor: 'white',
    opacity: 0.5,
  },
});

const BottomTabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home" screenOptions={screenOptions}>
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={homeOptions}
        />
        <Tab.Screen
          name="Log in"
          component={LoginScreen}
          options={loginOptions}
        />
        {/* Other Tab.Screen components */}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const screenOptions = {
  tabBarActiveTintColor: '#e91e63',
  tabBarInactiveTintColor: 'gray',
  tabBarLabelStyle: styles.labelStyle,
  tabBarStyle: styles.tabBarStyle,
};

const homeOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({color, size}) => (
    <Icon name="home-outline" color={color} size={size} />
  ),
};

const loginOptions = {
  tabBarLabel: 'Log in',
  tabBarIcon: ({color, size}) => (
    <Icon name="log-in-outline" color={color} size={size} />
  ),
};

export default BottomTabNavigator;
