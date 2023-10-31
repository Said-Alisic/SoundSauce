import React from 'react';
import { View } from 'native-base';
import { LoginScreen, SettingsScreen } from './../screens';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function Navigation(): JSX.Element {
  return (
    <NavigationContainer>
      <View flex={1}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
          {/* TODO: Remove MusicPlayer from navigation later and use as an overlay component when technical logic is in place ✨ */}
          <Stack.Screen name="MusicPlayer" component={SettingsScreen} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}
