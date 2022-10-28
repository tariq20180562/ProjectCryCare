import {Pressable, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({navigation}) => {
  const Logout =() => {
    try {
      AsyncStorage.removeItem('AccesToken');
      navigation.replace('Login');
    } catch (e) {
      // remove error
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles}>sucess Login</Text>
      <TouchableOpacity style={styles.logout} onPress={()=>Logout()}>
        <Text>LOGOUT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  logout: {
    width: 150,
    height: 50,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    
  },
});
