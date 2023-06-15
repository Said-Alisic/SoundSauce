import React, { useState } from 'react';
import { Box, HStack, Heading, VStack} from 'native-base';
import LoginForm from './components/LoginForm';
import { Center } from 'native-base';

const LoginScreen = (): React.JSX.Element => {
  return (
    <Center
   _dark={{ bg: "blueGray.900" }}
    _light={{ bg: "blueGray.50" }}
    px={4}
    flex={1}
    >
		<VStack space={5} alignItems="center">
			<Heading size="lg">사운드서스</Heading>
			<HStack space={2} alignItems="center">

				<Box safeArea flex={1} p={2} alignItems="center" justifyContent="center">
					<Heading mb={4}>Login</Heading>
					<LoginForm/>
				</Box>
			</HStack>
		</VStack>
	</Center>
	);
};

export default LoginScreen;
