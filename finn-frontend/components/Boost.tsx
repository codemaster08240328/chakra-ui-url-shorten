import React from 'react';
import { Box, Button } from '@chakra-ui/react';

const BoostComponent = () => {
  return (
    <Box
      bg="primary.dark_violet"
      bgImg="url('/assets/bg-boost-desktop.svg')"
      backgroundSize="cover"
      padding="80px"
      textAlign="center"
    >
      <Box
        color="white"
        fontSize="4xl"
        fontWeight="bold"
      > 
        Boost your links today
      </Box>
      <Button
        variant="rounded-cyan"
        mt="20px"
        size="lg"
        _hover={{
          bg: 'hover.cyan'
        }}
      >
        Get Started
      </Button>
    </Box>
  )
};

export default BoostComponent;
