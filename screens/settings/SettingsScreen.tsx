import React from 'react';
import { Heading, VStack, ScrollView, View, Center } from 'native-base';
import AccountSection from './components/account-section/AccountSection';
import LanguageSection from './components/language-section/LanguageSection';

const SettingsScreen = (): JSX.Element => {
  return (
    <ScrollView px={4} flex={1}>
      <VStack space={5}>
        <View style={{ top: 80 }}>
          <Center>
            <Heading size="xl" mb={4} style={{ top: -10 }}>
              Settings
            </Heading>
          </Center>
          <AccountSection />
          <LanguageSection />
        </View>
      </VStack>
    </ScrollView>
  );
};

export default SettingsScreen;
