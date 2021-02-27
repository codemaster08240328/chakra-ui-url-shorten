import React, { useState } from 'react';
import { Box, Button } from '@chakra-ui/react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export interface TUrlComponentProps {
  origin: string;
  shorten: string;
  copied: boolean;
}

type TPropsFunc = {
  // eslint-disable-next-line no-unused-vars
  setCopiedUrl(shorten: string): void;
};

const UrlComponent: React.FC<TUrlComponentProps & TPropsFunc> = ({
  origin,
  shorten,
  copied: propsCopied,
  setCopiedUrl,
}) => {
  const [copied, setcopied] = useState<boolean>(propsCopied);

  const onCopy = () => {
    setcopied(true);
    setCopiedUrl(shorten);
  };

  const isCopied = () => copied && propsCopied;

  return (
    <Box
      data-cy="shortened-url"
      bg="white"
      p="7px"
      mt="15px"
      mx={['20px', '20px', '0']}
      display="flex"
      borderRadius="5px"
      alignItems={['flex-start', 'flex-start', 'center']}
      flexDir={['column', 'column', 'row']}
    >
      <Box
        color="neutral.dark_violet"
        py={['10px', '10px', '0']}
        borderStyle={['solid', 'solid', 'none']}
        borderWidth="0 0 2px 0"
        borderColor="neutral.gray"
        w={['100%', '100%', 'fit-content']}
      >
        {origin}
      </Box>
      <Box flexGrow={1} />
      <Box mr="7px" color="primary.cyan" py={['10px', '10px', '0']}>
        {shorten}
      </Box>
      <CopyToClipboard text={shorten} onCopy={onCopy}>
        <Button
          bg={isCopied() ? 'primary.dark_violet' : 'primary.cyan'}
          fontSize="0.8em"
          width={['100%', '100%', '100px']}
          _hover={{
            bg: isCopied() ? 'hover.dark_violet' : 'hover.cyan',
            cursor: isCopied() ? 'not-allowed' : 'allowed',
          }}
          disabled={isCopied()}
        >
          {!isCopied() && 'Copy'}
          {isCopied() && 'Copied'}
        </Button>
      </CopyToClipboard>
    </Box>
  );
};

export default UrlComponent;
