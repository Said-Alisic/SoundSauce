import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { DarkModeButton } from './components';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navigation from './navigation/Navigation';

export default function App(): JSX.Element {
  return (
    <NativeBaseProvider>
      <Navigation />
      <DarkModeButton />
    </NativeBaseProvider>
  );
}
