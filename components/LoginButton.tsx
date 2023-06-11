
import React from 'react';
import { Button } from 'native-base';
import { LoginHandler } from '../handlers';
import { ILoginButtonProps } from '../libs/interfaces';

const loginHandler = new LoginHandler();

const LoginButton: React.FC<ILoginButtonProps>  = ({ email, password }): React.JSX.Element => {
	const handleLogin = () => {
    loginHandler.handleLogin(email, password);
  };

  return <Button onPress={handleLogin}>Login</Button>;
};

export default LoginButton;


