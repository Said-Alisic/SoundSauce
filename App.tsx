import React from "react";
import {
  NativeBaseProvider,
  View,
  extendTheme,
} from "native-base";
import { DarkModeButton } from "./components";
import { LoginScreen, SettingsScreen } from "./screens";

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
export default function App(): JSX.Element {
  return (
    <NativeBaseProvider>
			<View
			  _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.50" }}
				px={4}
				flex={1}
			>
				{/* <LoginScreen/> */}
				<SettingsScreen/>
				<DarkModeButton />
			</View>
    </NativeBaseProvider>
  );
}