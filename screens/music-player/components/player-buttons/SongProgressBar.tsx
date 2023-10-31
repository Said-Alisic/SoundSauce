import React from 'react';
import { Box, Progress } from 'native-base';

const SongProgressBar = (): JSX.Element => {
  return (
    <Box w="95%" mb={8}>
      {/* TODO: Add technical logic later */}
      <Progress value={76} size="xs" colorScheme={'indigo'} />
    </Box>
  );
};

export default SongProgressBar;
