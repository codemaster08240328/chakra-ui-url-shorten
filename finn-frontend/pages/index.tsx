import React from 'react';
import { Box, Image } from '@chakra-ui/react'

import Ill_Working from '../styles/assets/illustration-working.svg';

const Home: React.FC = () => {
  return (
    <Box>
      <Box
        id="homepage-banner"
        display="flex"
        paddingLeft="100px"
        justifyContent="space-between"
        maxWidth="1440px"
        marginLeft="calc(50% - 720px)"
        marginTop="50px"
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Box
            fontSize="6xl"
            fontWeight="bold"
            lineHeight="69px"
            alignItems="center"
          >
            More than just<br />shorter links
          </Box>
          <Box
            fontSize="1.2em"
            color="neutral.gray_violet"
            marginTop="4px"
          >
            Build your brand's recognition get detailed <br/>insights on how your links are performing.
          </Box>
          <Box
            as="button"
            padding="13px 32px"
            bg="primary.cyan"
            color="white"
            borderRadius="26px"
            width="fit-content"
            fontSize="1.2em"
            marginTop="40px"
          >
            Get Started
          </Box>
        </Box>
        <Box>
          <Image 
            src={Ill_Working}
            width="680px"
            marginLeft="100px"
          />
        </Box>
      </Box>
    </Box>
  )
}

export default Home;
