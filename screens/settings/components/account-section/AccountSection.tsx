import React from 'react';
import { Heading, View } from 'native-base';
import AccountForm from './AccountForm';

const AccountSection = (): JSX.Element => {
  return (
    <View mb={8}>
      <Heading size="md" mb={3}>
        Account
      </Heading>
      <AccountForm />
    </View>
  );
};

export default AccountSection;
