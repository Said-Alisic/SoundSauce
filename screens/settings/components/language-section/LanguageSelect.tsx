import { CheckIcon, Select, VStack } from 'native-base';
import React, { useState } from 'react';
import { locales } from '../../../../libs/utils';
import LanguageSelectSubmitButton from './LanguageSelectSubmitButton';

const LanguageSelect = (): React.ReactElement => {
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const handleLanguageChange = (language: string): void => {
    setSelectedLanguage(language);
  };

  return (
    <VStack space={3} width="100%">
      <Select
        variant="unstyled"
        selectedValue={selectedLanguage}
        accessibilityLabel="Choose Language"
        placeholder="Choose Language"
        _selectedItem={{
          bg: 'teal.600',
          endIcon: <CheckIcon size="5" />,
        }}
        mt={1}
        onValueChange={(itemValue) => handleLanguageChange(itemValue)}
      >
        <Select.Item label="System Default" value="default" />
        {locales.map((locale) => {
          const { language, localeCode } = locale;
          return (
            <Select.Item label={language} value={localeCode} key={localeCode} />
          );
        })}
      </Select>
      <LanguageSelectSubmitButton locale={selectedLanguage} />
    </VStack>
  );
};

export default LanguageSelect;
