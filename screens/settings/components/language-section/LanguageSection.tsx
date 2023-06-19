import React from 'react';
import { Heading, View } from 'native-base';
import LanguageSelect from './LanguageSelect';

const LanguageSection = (): JSX.Element => {
  return (
    <View mb={8}>
      <Heading size="md" mb={3}>
        Language
      </Heading>
      <LanguageSelect />
    </View>
  );
};

export default LanguageSection;
