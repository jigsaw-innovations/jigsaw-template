import React, {useEffect} from 'react';
import {View, Text, Animated, StyleSheet} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

type LandingScreenStackParamList = {
  Home: undefined;
};

type LandingScreenProps = {
  navigation: StackNavigationProp<LandingScreenStackParamList, 'Home'>;
  route: RouteProp<LandingScreenStackParamList, 'Home'>;
};

const LandingScreen: React.FC<LandingScreenProps> = ({navigation}) => {
  const fadeAnim = new Animated.Value(0); // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start(() => {
      navigation.navigate('Home');
    });
  }, [fadeAnim]);

  return (
    <View style={styles.container}>
      <Animated.View style={{...styles.box, opacity: fadeAnim}}>
        <Text style={styles.text}>Welcome!</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: 'tomato',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 32,
    color: 'white',
  },
});

export default LandingScreen;
