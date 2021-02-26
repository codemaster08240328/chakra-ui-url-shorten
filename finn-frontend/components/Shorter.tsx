import React, { useEffect, useState } from 'react';
import { Box, Button, Input, Text } from '@chakra-ui/react';

export interface TShorterProps {
  // eslint-disable-next-line no-unused-vars
  shortenUrl: (link: string) => void;
  loading: boolean;
}

const Shorter: React.FC<TShorterProps> = ({ shortenUrl, loading }) => {
  const [link, setlink] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    setlink('');
  }, [loading]);

  const shortenLink = () => {
    if (!link) {
      setError(true);
      return;
    }

    shortenUrl(link);
  };

  const isInvalid = () => error && !link;

  return (
    <Box
      display="flex"
      bg="primary.dark_violet"
      m="0 auto"
      padding={['20px', '20px', '30px']}
      maxWidth="1240px"
      width={['calc(100% - 40px)', 'calc(100% - 40px)', 'calc(100% - 200px)']}
      alignItems="center"
      borderRadius="5px"
      bgImg={'url("/assets/bg-shorten-desktop.svg")'}
      backgroundSize="cover"
      flexDir={['column', 'column', 'row']}
    >
      <Box
        flexGrow={1}
        position="relative"
        width={{
          sm: '100%',
        }}
      >
        <Input
          isInvalid={isInvalid()}
          bg="white"
          value={link}
          placeholder="Shorten a link here..."
          onChange={(e) => {
            setlink(e.target.value);
            setError(false);
          }}
          errorBorderColor="secondary.red"
          _placeholder={{
            color: isInvalid() ? 'secondary.red' : 'neutral.gray',
          }}
        />
        {isInvalid() && (
          <Text
            as="span"
            color="secondary.red"
            position="absolute"
            left="3px"
            top="43px"
            fontSize="12px"
          >
            Please add a link
          </Text>
        )}
      </Box>
      <Button
        isLoading={loading}
        width={['100%', '100%', 'fit-content']}
        padding="9px 25px"
        variant="cyan"
        color="white"
        ml={['0px', '0px', '15px']}
        mt={['30px', '30px', '0']}
        _hover={{
          bg: 'hover.cyan',
        }}
        onClick={() => shortenLink()}
      >
        Shorten It!
      </Button>
    </Box>
  );
};

export default Shorter;
