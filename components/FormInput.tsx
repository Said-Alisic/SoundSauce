import React, { useState } from 'react';
import { Input } from 'native-base';
import { IFormInputProps } from '../libs/interfaces';

const FormInput: React.FC<IFormInputProps> = ({
  onInputChange,
  value,
  placeholder,
  isSecureTextField = false,
}): JSX.Element => {
  const [input, setInput] = useState(value ? value : '');

  const handleInputChange = (value: string): void => {
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

export default FormInput;
