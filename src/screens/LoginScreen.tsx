import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

const LoginScreen: React.FC = () => {
  const handleGoogleLogin = () => {
    // Handle Google login logic here
    console.log('Continue with Google');
  };

  const handleAppleLogin = () => {
    // Handle Apple login logic here
    console.log('Continue with Apple');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TouchableOpacity
        style={[styles.button, styles.googleButton]}
        onPress={handleGoogleLogin}>
        <Text style={styles.buttonText}>Continue with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.appleButton]}
        onPress={handleAppleLogin}>
        <Text style={styles.buttonText}>Continue with Apple</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    margin: 10,
  },
  googleButton: {
    backgroundColor: '#4285F4',
  },
  appleButton: {
    backgroundColor: '#000',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default LoginScreen;
