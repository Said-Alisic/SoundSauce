import React from "react";
import {
  useColorMode,
	IconButton,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";

// Color Switch Component
const DarkModeButton = (): JSX.Element => {
  const { colorMode, toggleColorMode } = useColorMode();

	const isDarkMode: boolean = colorMode === 'dark';

  const iconName: string = isDarkMode ? 'moon-sharp' : 'ios-sunny-sharp';
  const iconBgColor: string = isDarkMode ? '#fde047' : '#1e3a8a';
  const iconColor: string = isDarkMode ? '#1e3a8a' : '#fde047';

  return (
		 <IconButton 
		 colorScheme="indigo" 
		 variant="solid"
		 borderRadius="full" 
		 style={
			{ 
				position: 'absolute', 
				bottom: 30, 
				right: 30,
				backgroundColor: iconBgColor,
			}} 
		 _icon={
			{
			  as: Ionicons,
				size: "2xl",
				name: iconName,
				color: iconColor
      }} 
			onPress={toggleColorMode}/>
		  );
}

export default DarkModeButton;
