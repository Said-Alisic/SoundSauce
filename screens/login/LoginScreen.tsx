import React, { useState } from 'react';
import { Box, Heading} from 'native-base';
import LoginForm from './components/LoginForm';

const LoginScreen = (): React.JSX.Element => {
  return (
    <Box safeArea flex={1} p={2} alignItems="center" justifyContent="center">
      <Heading mb={4}>Login</Heading>
			<LoginForm/>
    </Box>
  );
};

export default LoginScreen;
