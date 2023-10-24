import React, {useEffect} from 'react';
import {
  View,
  Text,
  Animated,
  StyleSheet,
  StackNavigationProp,
} from 'react-native';
import {RouteProp} from '@react-navigation/native';

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
    Animated.timing(
      fadeAnim, // The animated value to drive
      {
        toValue: 1, // Animate to opacity: 1 (opaque)
        duration: 2000, // Make it take 2000ms
        useNativeDriver: true,
      },
    ).start(() => {
      // Once the animation is done, navigate to another screen
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
