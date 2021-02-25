import React from 'react';
import { Box, Button, Input } from '@chakra-ui/react';

const Shorter = () => {
  return (
    <Box
      display="flex"
      bg="primary.dark_violet"
      padding="30px"
      maxWidth="1240px"
      position="absolute"
      left="calc(50% - 620px)"
      right="calc(50% - 620px)"
      top="-50px"
      alignItems="center"
      borderRadius="5px"
      bgImg={'url("/assets/bg-shorten-desktop.svg")'}
      backgroundSize="cover"
    >
      <Input
        bg="white"
      />
      <Button
        padding="9px 25px"
        variant="cyan"
        color="white"
        ml="15px"
      >
        Shorten It!
      </Button>
    </Box>
  )
}

export default Shorter;
