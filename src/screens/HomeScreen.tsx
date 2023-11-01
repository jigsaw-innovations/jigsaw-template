import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import HomeIcon from '../assets/icons/HomeIcon';
import SettingsIcon from '../assets/icons/SettingsIcon';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome to &lt;app_name&gt;</Text>
        <HomeIcon size={32} isFilled={false} />
        <Text>Hello</Text>
        <SettingsIcon size={32} isFilled={false} />
        {/* You can add more components here and they will be scrollable */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default HomeScreen;
