import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeIcon from '../../assets/icons/HomeIcon';
import ProfileIcon from '../../assets/icons/ProfileIcon';
import HomeStackNavigator from '../stacks/HomeStackNavigator';
import ProfileStackNavigator from '../stacks/ProfileStackNavigator';

enum RouteNames {
  Home = 'HomeStack',
  Profile = 'ProfileStack',
}

// types.ts
type TabParamList = {
  [RouteNames.Home]: undefined;
  [RouteNames.Profile]: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const styles = StyleSheet.create({
  labelStyle: {
    fontSize: 12,
  },
  tabBarStyle: {
    backgroundColor: 'white',
    opacity: 0.8,
  },
});

const screenOptions = {
  tabBarActiveTintColor: '#e91e63',
  tabBarInactiveTintColor: 'gray',
  tabBarLabelStyle: styles.labelStyle,
  tabBarStyle: styles.tabBarStyle,
  headerShown: false
};

const BottomTabNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={RouteNames.Home}
        screenOptions={screenOptions}>
        <Tab.Screen
          name={RouteNames.Home}
          component={HomeStackNavigator}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <HomeIcon color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name={RouteNames.Profile}
          component={ProfileStackNavigator}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color, size}) => (
              <ProfileIcon color={color} size={size} />
            ),
          }}
        />
        {/* Other Tab.Screen components */}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNavigator;
