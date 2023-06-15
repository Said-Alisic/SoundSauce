import React from "react";
import {
  NativeBaseProvider,
  extendTheme,
} from "native-base";
import { DarkModeButton } from "./components";
import { LoginScreen } from "./screens";

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
export default function App(): React.JSX.Element {
  return (
    <NativeBaseProvider>
			<LoginScreen/>
			<DarkModeButton />
    </NativeBaseProvider>
  );
}