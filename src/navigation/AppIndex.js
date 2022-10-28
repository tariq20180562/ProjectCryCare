import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Login, SignUp} from '../screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ForgetPassword from '../screens/Login/ForgetPassword';
import Home from '../screens/Home';
import Splash from '../screens/Splash';
const Stack = createNativeStackNavigator();
export default function AppIndex() {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'Splash'}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Forget" component={ForgetPassword} />
      <Stack.Screen name="Splash" component={Splash} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
