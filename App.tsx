import React from 'react';
import { NativeBaseProvider, View, extendTheme } from 'native-base';
import { DarkModeButton } from './components';
import { LoginScreen, SettingsScreen } from './screens';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
};

// extend the theme
export const theme = extendTheme({ config });
type MyThemeType = typeof theme;
declare module 'native-base' {
  interface ICustomTheme extends MyThemeType {}
}

const Stack = createNativeStackNavigator();

export default function App(): JSX.Element {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <View flex={1}>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
          </Stack.Navigator>
          <DarkModeButton />
        </View>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
