import React, { useState } from 'react';
import { VStack, FormControl } from 'native-base';
import { LoginButton, LoginInput } from '../../../components';

const LoginForm = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
		<VStack space={2} width="60%">
			<FormControl>
				<LoginInput 
				  placeholder="Email"
					isSecureTextField={false}
				  onInputChange={setEmail} 
				/>
			</FormControl>
			<FormControl>
			<LoginInput 
				  placeholder="Password"
					isSecureTextField={true}
				  onInputChange={setPassword} 
				/>
			</FormControl>
			<LoginButton
			  email={email}
				password={password}
			/>
		</VStack>
  );
};

export default LoginForm;
