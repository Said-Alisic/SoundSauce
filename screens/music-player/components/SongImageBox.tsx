import React from 'react';
import { Box, Center, Image, VStack } from 'native-base';

const SongImageBox = (): JSX.Element => {
  return (
    <VStack style={{ top: 100, marginBottom: 30 }}>
      <Center style={{ backgroundColor: `transparent` }}>
        <Box style={{ width: 320, height: 320 }} shadow={5}>
          {/* TODO: Set the 'uri' and 'alt' properties to response from API (!!! Requires finished backend API and DB !!!) */}
          <Image
            resizeMode="cover"
            source={{
              uri: 'https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=700&w=1260',
            }}
            alt="Picture of a Flower"
            style={{
              flex: 1,
            }}
          />
        </Box>
      </Center>
    </VStack>
  );
};

export default SongImageBox;
