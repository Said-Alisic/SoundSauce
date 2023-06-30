import React from 'react';
import {
  Box,
  Center,
  HStack,
  Heading,
  IconButton,
  Image,
  Progress,
  VStack,
  View,
} from 'native-base';
import { Entypo, Octicons, Ionicons } from '@expo/vector-icons';
import { Text } from 'native-base';

const MusicPlayerScreen = () => {
  return (
    <View
      px={4}
      flex={1}
      _dark={{ bg: 'blueGray.900' }}
      _light={{ bg: 'blueGray.50' }}
    >
      <VStack style={{ top: 50 }}>
        <IconButton
          colorScheme="indigo"
          variant="ghost"
          borderRadius="full"
          style={{
            top: 10,
            left: 20,
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
          onPress={() => console.log('hey 2')}
        />
      </VStack>
      <VStack style={{ top: 100, marginBottom: 30 }}>
        <Center style={{ backgroundColor: `transparent` }}>
          <Box style={{ width: 320, height: 320 }} shadow={5}>
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
      <VStack style={{ top: 150, left: 8 }}>
        <Heading mb={1.5} size={'lg'}>
          [Song Title]
        </Heading>
        <Text size={'md'}>[Artist name(s)]</Text>
      </VStack>
      <VStack style={{ bottom: 240 }}>
        <Center w="100%">
          <Box w="95%" mb={8}>
            <Progress value={76} size="xs" colorScheme={'indigo'} />
          </Box>
          <HStack space={2.5} justifyContent="center" w="95%" left={1}>
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
              onPress={() => console.log('hey 3')}
            />
            <IconButton
              colorScheme="indigo"
              variant="ghost"
              borderRadius="full"
              _icon={{
                as: Entypo,
                size: '5xl',
                name: 'controller-jump-to-start',
              }}
              _hover={{
                bg: 'transparent',
                bgColor: 'transparent',
              }}
              onPress={() => console.log('Previous Song')}
            />
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
              onPress={() => console.log('Play Song')}
            />
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
              onPress={() => console.log('Next Song')}
            />
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
              onPress={() => console.log('Block Song')}
            />
          </HStack>
        </Center>
      </VStack>

      {/* TODO: #4 -> Add play button */}
      {/* TODO: #4 -> Add controller previous song button */}
      {/* TODO: #4 -> Add controller next song button */}
    </View>
  );
};

export default MusicPlayerScreen;
