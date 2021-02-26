import React, { useState } from 'react';
import { Box, Button } from '@chakra-ui/react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export type TUrlComponentProps = {
  origin: string;
  shorten: string;
  copied: boolean;
}

const UrlComponent: React.FC<TUrlComponentProps & {setCopiedUrl: (shorten: string) => void;}> = ({origin, shorten, copied: propsCopied, setCopiedUrl}) => {
  const [copied, setcopied] = useState<boolean>(propsCopied);

  const onCopy = () => {
    setcopied(true);
    setCopiedUrl(shorten);
  }

  const isCopied = () => {
    return copied && propsCopied;
  }

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
      <CopyToClipboard
        text={shorten}
        onCopy={onCopy}
      >
        <Button
          bg={isCopied() ? 'primary.dark_violet' : 'primary.cyan'}
          fontSize="0.8em"
          width="100px"
          _hover={{
            bg: isCopied() ? 'hover.dark_violet' : 'hover.cyan',
            cursor: isCopied() ? 'not-allowed' : 'allowed'
          }}
          disabled={isCopied()}
        >
          { !isCopied() && 'Copy'}
          { isCopied() && 'Copied'}
        </Button>
      </CopyToClipboard>
    </Box>
  )
}

export default UrlComponent;
