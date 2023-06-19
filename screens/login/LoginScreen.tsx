import React from 'react';
import { Box, HStack, Heading, VStack } from 'native-base';
import LoginForm from './components/LoginForm';
import { Center } from 'native-base';

const LoginScreen = (): JSX.Element => {
  return (
    <Center px={4} flex={1}>
      <VStack space={5} alignItems="center">
        <Heading
          mb={4}
          size="2xl"
          style={{
            bottom: 70,
          }}
        >
          사운드서스
        </Heading>
        <HStack space={2} alignItems="center">
          <Box
            safeArea
            flex={1}
            p={2}
            alignItems="center"
            justifyContent="center"
            style={{
              bottom: 70,
            }}
          >
            <Heading mb={4}>Login</Heading>
            <LoginForm />
          </Box>
        </HStack>
      </VStack>
    </Center>
  );
};

export default LoginScreen;
