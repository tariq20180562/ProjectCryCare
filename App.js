
import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppIndex from './src/navigation/AppIndex';
export default function App() {

  return (
    <NavigationContainer>
      <AppIndex />
    </NavigationContainer>
  );
}
