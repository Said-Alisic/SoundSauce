import React from 'react';
import { IconButton } from 'native-base';
import { Entypo } from '@expo/vector-icons';

const NextSongButton = (): JSX.Element => {
  return (
    <IconButton
      colorScheme="indigo"
      variant="ghost"
      borderRadius="full"
      _icon={{
        as: Entypo,
        size: '5xl',
        name: 'controller-next',
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
      onPress={() => console.log('Next Song')}
    />
  );
};

export default NextSongButton;
