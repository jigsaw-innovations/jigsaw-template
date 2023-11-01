import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../screens/HomeScreen';

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
