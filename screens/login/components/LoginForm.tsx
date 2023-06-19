import React, { useState } from 'react';
import { VStack, FormControl } from 'native-base';
import { FormInput } from '../../../components';
import LoginButton from './LoginButton';

const LoginForm = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <VStack space={2} width="60%">
      <FormControl>
        <FormInput
          placeholder="Email"
          isSecureTextField={false}
          onInputChange={setEmail}
        />
      </FormControl>
      <FormControl>
        <FormInput
          placeholder="Password"
          isSecureTextField={true}
          onInputChange={setPassword}
        />
      </FormControl>
      <LoginButton email={email} password={password} />
    </VStack>
  );
};

export default LoginForm;
