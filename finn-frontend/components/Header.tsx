import React from 'react';
import { Box, Button, Image } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box 
      padding="35px 100px"
      display="flex"
      alignItems="center"
      maxWidth="1440px"
      marginLeft="calc(50% - 720px)"
    >
      <Image
        flexGrow={0}
        src='/assets/logo.svg'
        height="fit-content"
      />

      <Box
        flexGrow={1}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        marginLeft="15px"
        color="neutral.gray_violet"
        fontWeight="bold"
        fontSize="0.8em"
        >
        <Box
          display="flex"
          >
          <Box 
            padding="0 15px"
            _hover={{
              cursor: 'pointer',
              color: 'neutral.dark_violet',
            }}
          >Features</Box>
          <Box
            padding="0 15px"
            _hover={{
              cursor: 'pointer',
              color: 'neutral.dark_violet',
            }}
          >Pricing</Box>
          <Box 
            padding="0 15px" 
            _hover={{
              cursor: 'pointer',
              color: 'neutral.dark_violet',
            }}
          >Resources</Box>
        </Box>
        <Box
          display="flex"
          alignItems="center"
        >
          <Box padding="0 15px">Login</Box>
          <Button 
            padding="5px 15px"
            variant="rounded-cyan"
            borderRadius="20px"
            fontWeight="bold"
            marginLeft="10px"
            fontSize="1em"
          >
            Sign Up
          </Button>
        </Box>
      </Box>

    </Box>
  )
}

export default Header;
