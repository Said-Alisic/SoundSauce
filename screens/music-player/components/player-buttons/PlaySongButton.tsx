import React from 'react';
import { IconButton } from 'native-base';
import { Entypo } from '@expo/vector-icons';

const PlaySongButton = (): JSX.Element => {
  return (
    <IconButton
      colorScheme="indigo"
      variant="solid"
      borderRadius="full"
      boxSize={75}
      _icon={{
        as: Entypo,
        size: '4xl',
        name: 'controller-play',
        left: 0.5,
      }}
      _hover={{
        bg: 'transparent',
        bgColor: 'transparent',
      }}
      // TODO: Add technical logic later
      onPress={() => console.log('Play Song')}
    />
  );
};

export default PlaySongButton;
