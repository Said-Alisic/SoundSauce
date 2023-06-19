
import React from 'react';
import { Button } from 'native-base';
import { LanguageHandler } from '../../../../handlers';
import { ILanguageSubmitButtonProps } from '../../../../libs/interfaces';

const languageHandler = new LanguageHandler();

const LanguageSelectSubmitButton: React.FC<ILanguageSubmitButtonProps>  = ({ locale }): JSX.Element => {
	const handleLanguageUpdate = (): void => {
    languageHandler.handleLanguageUpdate(locale);
  };

  return <Button onPress={ handleLanguageUpdate }>Update</Button>;
};

export default LanguageSelectSubmitButton;


