import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Colors from '../utils/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      handleLogin();
    }, 2000);
  });
  const handleLogin = async () => {
    const dataToken = await AsyncStorage.getItem('AccesToken');
    !dataToken ? navigation.replace('Login') : navigation.replace('Home');
  };
  return (
    <View style={styles.Splash}>
      <Text style={styles.text}>Splash2</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  Splash: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Colors.primary2,
  },
});
