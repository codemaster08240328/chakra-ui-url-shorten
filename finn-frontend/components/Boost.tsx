import React from 'react';
import { Box, Button } from '@chakra-ui/react';

const BoostComponent: React.FC = () => (
  <Box
    bg="primary.dark_violet"
    bgImg="url('/assets/bg-boost-desktop.svg')"
    backgroundSize="cover"
    padding={['40px 20px', '40px 20px', '80px']}
    textAlign="center"
  >
    <Box color="white" fontSize="1.75rem" fontWeight="bold">
      Boost your links today
    </Box>
    <Button
      variant="rounded-cyan"
      mt="20px"
      size="lg"
      _hover={{
        bg: 'hover.cyan',
      }}
    >
      Get Started
    </Button>
  </Box>
);

export default BoostComponent;
