import React from 'react';
import { Heading, VStack } from 'native-base';
import { Text } from 'native-base';

// TODO: Split 'Heading' and 'Text' components? 🤔
const SongInfoHeading = (): JSX.Element => {
  return (
    <VStack style={{ top: 150, left: 8 }}>
      <Heading mb={1.5} size={'lg'}>
        [Song Title]
      </Heading>
      {/* TODO: Display artist names as an array of strings */}
      <Text size={'md'}>[Artist name(s)]</Text>
    </VStack>
  );
};

export default SongInfoHeading;
