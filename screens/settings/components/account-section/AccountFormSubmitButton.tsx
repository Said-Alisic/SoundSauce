
import React from 'react';
import { Button } from 'native-base';
import { AccountHandler } from '../../../../handlers';
import { IAccountFormSubmitButtonProps } from '../../../../libs/interfaces';

const accountHandler = new AccountHandler();

const AccountFormSubmitButton: React.FC<IAccountFormSubmitButtonProps>  = ({ name, email, password }): JSX.Element => {
	const handleAccountUpdate = (): void => {
    accountHandler.handleAccountUpdate(name, email, password);
  };

  return <Button onPress={handleAccountUpdate}>Update</Button>;
};

export default AccountFormSubmitButton;


