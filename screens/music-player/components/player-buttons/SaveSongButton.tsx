import React from 'react';
import { IconButton } from 'native-base';
import { Octicons } from '@expo/vector-icons';

const SaveSongButton = (): JSX.Element => {
  return (
    <IconButton
      colorScheme="indigo"
      variant="ghost"
      borderRadius="full"
      _icon={{
        as: Octicons,
        size: 'xl',
        name: 'heart',
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
      onPress={() => console.log('Save Song')}
    />
  );
};

export default SaveSongButton;
