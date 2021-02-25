import { Box, Button } from '@chakra-ui/react';
import React from 'react';

export type TUrlComponentProps = {
  origin: string;
  shorten: string;
  copied: boolean;
}

const UrlComponent: React.FC<TUrlComponentProps> = ({origin, shorten, copied}) => {
  return (
    <Box
      bg="white"
      borderRadius="5px"
      display="flex"
      mt="15px"
      alignItems="center"
      p="7px"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        flexGrow={1}
        mr="7px"
      >
        <Box
          color="neutral.dark_violet"
        >{origin}</Box>
        <Box
          color="primary.cyan"
        >{shorten}</Box>
      </Box>
      {!copied &&
        <Button
          variant="cyan"
          fontSize="0.8em"
          width="100px"
          _hover={{
            bg: 'hover.cyan'
          }}
        >
          Copy
        </Button>
      }
      {copied &&
        <Button
          fontSize="0.8em"
          bg="primary.dark_violet"
          width="100px"
          _hover={{
            bg: 'hover.dark_violet',
            cursor: 'not-allowed'
          }}
          disabled
        >
          Copied!
        </Button>
      }
    </Box>
  )
}

export default UrlComponent;
