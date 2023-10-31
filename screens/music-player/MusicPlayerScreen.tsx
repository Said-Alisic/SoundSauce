import React from 'react';
import { View } from 'native-base';
import MinimizePlayerButton from './components/MinimizePlayerButton';
import SongImageBox from './components/SongImageBox';
import SongInfoHeading from './components/SongInfoHeading';
import PlayerButtonsSection from './components/PlayerButtonsSection';

const MusicPlayerScreen = () => {
  return (
    <View
      px={4}
      flex={1}
      _dark={{ bg: 'blueGray.900' }}
      _light={{ bg: 'blueGray.50' }}
    >
      <MinimizePlayerButton />
      <SongImageBox />
      <SongInfoHeading />
      <PlayerButtonsSection />
    </View>
  );
};

export default MusicPlayerScreen;
