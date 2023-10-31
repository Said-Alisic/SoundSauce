import React from 'react';
import { IconButton, VStack } from 'native-base';
import { Entypo } from '@expo/vector-icons';

const MinimizePlayerButton = (): JSX.Element => {
  return (
    <VStack style={{ top: 50 }}>
      <IconButton
        colorScheme="indigo"
        variant="ghost"
        borderRadius="full"
        style={{
          top: -10,
          left: 10,
          width: '0%',
        }}
        _icon={{
          as: Entypo,
          size: 'md',
          name: 'chevron-thin-down',
        }}
        _hover={{
          bg: 'transparent',
          bgColor: 'transparent',
        }}
        _pressed={{
          bg: 'transparent',
          bgColor: 'transparent',
          _icon: {
            color: 'indigo.400',
          },
        }}
        // TODO: Add technical logic later
        onPress={() => console.log('Minimize player')}
      />
    </VStack>
  );
};

export default MinimizePlayerButton;
