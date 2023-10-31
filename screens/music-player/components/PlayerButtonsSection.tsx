import React from 'react';
import { Center, HStack, VStack } from 'native-base';
import SongProgressBar from './player-buttons/SongProgressBar';
import SaveSongButton from './player-buttons/SaveSongButton';
import BlockSongButton from './player-buttons/BlockSongButton';
import NextSongButton from './player-buttons/NextSongButton';
import PreviousSongButton from './player-buttons/PreviousSongButton';
import PlaySongButton from './player-buttons/PlaySongButton';

const PlayerButtonsSection = (): JSX.Element => {
  return (
    <VStack style={{ bottom: 240 }}>
      <Center w="100%">
        <SongProgressBar />
        <HStack space={2.5} justifyContent="center" w="95%" left={1}>
          <SaveSongButton />
          <PreviousSongButton />
          <PlaySongButton />
          <NextSongButton />
          <BlockSongButton />
        </HStack>
      </Center>
    </VStack>
  );
};

export default PlayerButtonsSection;
