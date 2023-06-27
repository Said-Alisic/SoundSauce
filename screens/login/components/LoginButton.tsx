import React from 'react';
import { Button } from 'native-base';
import { ILoginButtonProps } from '../../../libs/interfaces';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../libs/types';
import { LoginHandler } from '../../../handlers';

const loginHandler = new LoginHandler();

const LoginButton: React.FC<ILoginButtonProps> = ({
  email,
  password,
}): JSX.Element => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const login = (): void => {
    const isLoggedIn = loginHandler.handleLogin(email, password);

    if (isLoggedIn) {
      navigation.navigate('Settings');
    }
  };

  return <Button onPress={login}>Login</Button>;
};

export default LoginButton;
