import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import HomeIcon from '../assets/icons/HomeIcon';
import SettingsIcon from "../assets/icons/SettingsIcon";

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to &lt;app_name&gt;</Text>
      <HomeIcon size={32} isFilled={false} />
      <Text>Hello</Text>
      <SettingsIcon size={32} isFilled={false} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcomeText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default WelcomeScreen;
