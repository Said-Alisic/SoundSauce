import React, { useState } from 'react';
import { VStack, FormControl } from 'native-base';
import { FormInput } from '../../../../components';
import AccountFormSubmitButton from './AccountFormSubmitButton';

const AccountForm = (): JSX.Element => {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@email.hello');
  const [password, setPassword] = useState('BestPassword');

  return (
    <VStack space={3} width="100%">
      <FormControl>
        <FormInput
          placeholder={'Name'}
          value={name}
          isSecureTextField={false}
          onInputChange={setName}
        />
      </FormControl>
      <FormControl>
        <FormInput
          placeholder={'Email'}
          value={email}
          isSecureTextField={false}
          onInputChange={setEmail}
        />
      </FormControl>
      <FormControl>
        <FormInput
          placeholder={'Password'}
          value={password}
          isSecureTextField={true}
          onInputChange={setPassword}
        />
      </FormControl>
      <AccountFormSubmitButton name={name} email={email} password={password} />
    </VStack>
  );
};

export default AccountForm;
