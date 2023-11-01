// todo: Update the component to take in a style prop and base style off that prop
import React from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';

const TextInputField = ({
  label,
  placeholder,
  handleChange,
  handleBlur,
  value,
  touched,
  error,
  autoCapitalize,
  ...props
}) => {
  const capitalizedLabel = label.charAt(0).toUpperCase() + label.slice(1);
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{capitalizedLabel}</Text>
      <TextInput
        onChangeText={handleChange(label)}
        onBlur={handleBlur(label)}
        value={value}
        placeholder={placeholder || ''}
        style={styles.textInput}
        autoCapitalize={autoCapitalize || 'none'}
        {...props}
      />
      {touched && error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  textInput: {
    height: 50,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 10,
    borderRadius: 10,
    width: '100%',
  },
  errorText: {
    color: 'red',
    fontSize: 10,
    marginTop: 4,
  },
});

export default TextInputField;
