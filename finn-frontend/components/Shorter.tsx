import React, { useEffect, useState } from 'react';
import { Box, Button, Input, Text } from '@chakra-ui/react';

export type TShorterProps = {
  shortenUrl: (link: string) => void;
  loading: boolean;
}

const Shorter: React.FC<TShorterProps> = ({shortenUrl, loading}) => {
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
  }

  const isInvalid = () => {
    return error && !link
  }

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
      <Box
        flexGrow={1}
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
            color: isInvalid() ? 'secondary.red' : 'neutral.gray'
          }}
        />
        {
          isInvalid() && 
          <Text
            as="span"
            color="secondary.red"
            position="absolute"
            left="30px"
            bottom="8px"
            fontSize="12px"
          >
            Please add a link
          </Text>
        }
      </Box>
      <Button
        isLoading={loading}
        padding="9px 25px"
        variant="cyan"
        color="white"
        ml="15px"
        _hover={{
          bg: 'hover.cyan'
        }}
        onClick={() => shortenLink()}
      >
        Shorten It!
      </Button>
    </Box>
  )
}

export default Shorter;
