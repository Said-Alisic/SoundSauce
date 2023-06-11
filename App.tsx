import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
} from "native-base";
import { DarkModeSwitch } from "./components";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });
type MyThemeType = typeof theme;
declare module "native-base" {
  interface ICustomTheme extends MyThemeType {}
}
export default function App() {
  return (
    <NativeBaseProvider>
      <Center
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.50" }}
        px={4}
        flex={1}
      >
        <VStack space={5} alignItems="center">

          <Heading size="lg"> 안녕! 어서와.</Heading>
          <HStack space={2} alignItems="center">

          </HStack>
          <DarkModeSwitch />
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
}