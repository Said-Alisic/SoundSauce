import React, { useState } from 'react';
import {  Heading, VStack, ScrollView, View, Divider, Select, CheckIcon } from 'native-base';

const SettingsScreen = (): JSX.Element => {
	const [selectedLanguage, setSelectedLanguage] = useState('');

	const handleLanguageChange = (language: string): void => {
    setSelectedLanguage(language);
  };

	const data = [
    { key: '1', value: 'Mobiles' },
    { key: '2', value: 'Appliances' },
    { key: '3', value: 'Cameras' },
    { key: '4', value: 'Computers' },
    { key: '5', value: 'Vegetables' },
    { key: '6', value: 'Diary Products' },
    { key: '7', value: 'Drinks' },
  ];

  return (
		<ScrollView px={4} flex={1} 
		zIndex={1}
		>
			<VStack space={5} zIndex={1}>
				<View style={{top: 80 }} zIndex={1}>
					<Heading size='2xl' mb={4} style={{left: 220}}>Settings</Heading>
					<Heading size='lg' mb={2} style={{left: 10}}>Language</Heading>
						<Select 
							variant="unstyled"
							selectedValue={selectedLanguage}
							accessibilityLabel="Choose Language" 
							placeholder="Choose Language"
							_selectedItem={{
								bg: "teal.600",
								endIcon: <CheckIcon size="5" />
							}} 
							mt={1} 
							onValueChange={
								itemValue => handleLanguageChange(itemValue)
						}>
							<Select.Item label="Arabic" value="ar" />
							<Select.Item label="Danish" value="da" />
							<Select.Item label="English" value="en" />
							<Select.Item label="German" value="de" />
							<Select.Item label="French" value="fr" />
							<Select.Item label="Italian" value="it" />
							<Select.Item label="Norwegian" value="nb" />
							<Select.Item label="Russian" value="ru" />
							<Select.Item label="Spanish" value="es" />
							<Select.Item label="Swedish" value="sv" />
							<Select.Item label="中國人" value="zh" />
							<Select.Item label="日本" value="ja" />
							<Select.Item label="한국어" value="ko" />
					</Select>
					<Divider my={5}mt={10} width="100%"/>
				</View>
			</VStack>
		</ScrollView>
  );
};

export default SettingsScreen;
