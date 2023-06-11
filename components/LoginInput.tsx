import React, { useState } from 'react';
import { Input } from 'native-base';
import { ILoginInputProps } from '../libs/interfaces';


const LoginInput: React.FC<ILoginInputProps> = (
	{
		onInputChange,
		placeholder,
		isSecureTextField = false,
	}
	  ): 
		React.JSX.Element => {
  const [input, setInput] = useState('');

  const handleInputChange = (value: string) => {
    setInput(value);
    onInputChange(value);
  };

  return (
    <Input
      placeholder={placeholder}
			secureTextEntry={isSecureTextField || false} 
      value={input}
      onChangeText={handleInputChange}
    />
  );
};

export default LoginInput;