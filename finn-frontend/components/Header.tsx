import React from 'react';
import { Box, Image } from '@chakra-ui/react';
import LogoImg from '../styles/assets/logo.svg';

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
        src={LogoImg}
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
          <Box 
            padding="5px 15px"
            as="button"
            bg="primary.cyan"
            color="white"
            borderRadius="20px"
            fontWeight="bold"
            marginLeft="10px"
          >
            Sign Up
          </Box>
        </Box>
      </Box>

    </Box>
  )
}

export default Header;
