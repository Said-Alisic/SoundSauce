import React from 'react';
import { IconButton } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

const BlockSongButton = (): JSX.Element => {
  return (
    <IconButton
      colorScheme="indigo"
      variant="ghost"
      borderRadius="full"
      _icon={{
        as: Ionicons,
        size: 'xl',
        name: 'remove-circle-outline',
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
      onPress={() => console.log('Block Song')}
    />
  );
};

export default BlockSongButton;
