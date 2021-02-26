import React, { useState } from 'react';
import Link from 'next/link';
import { Box, Button, Image, Text } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

type TMenu = {
  title: string;
  link: string;
};

const headerMenu: Array<TMenu> = [
  {
    title: 'Features',
    link: '#',
  },
  {
    title: 'Pricing',
    link: '#',
  },
  {
    title: 'Resources',
    link: '#',
  },
];

const Header: React.FC = () => {
  const [menu, setmenu] = useState(false);
  return (
    <Box
      padding={['20px 20px', '20px 20px', '35px 100px']}
      display="flex"
      alignItems="center"
      maxWidth="1440px"
      w="100%"
      m="0 auto"
    >
      <Link href="/">
        <Image flexGrow={0} src="/assets/logo.svg" height="fit-content" />
      </Link>

      <Box
        d={['block', 'block', 'none']}
        flexGrow={1}
        textAlign="right"
        onClick={() => setmenu(!menu)}
      >
        <HamburgerIcon w={25} h={25} />
      </Box>
      {menu && (
        <Box
          position="absolute"
          width="calc(100% - 40px)"
          minH="100px"
          top="67px"
          bg="primary.dark_violet"
          display="flex"
          flexDir="column"
          alignItems="center"
          pt="10px"
          pb="25px"
          borderRadius="10px"
        >
          {headerMenu.map((item, index) => (
            <Text
              key={index.toString()}
              as="a"
              href={item.link}
              color="white"
              mt="15px"
              display="block"
              _hover={{
                cursor: 'pointer',
                color: 'primary.cyan',
              }}
            >
              {item.title}
            </Text>
          ))}
          <Box height="2px" bg="neutral.gray" mt="15px" width="90%" />
          <Box
            mt="15px"
            _hover={{
              cursor: 'pointer',
            }}
            color="white"
          >
            Login
          </Box>
          <Button
            padding="5px 15px"
            variant="rounded-cyan"
            borderRadius="20px"
            fontWeight="bold"
            fontSize="1em"
            _hover={{
              bg: 'hover.cyan',
            }}
            mt="15px"
            width="90%"
          >
            Sign Up
          </Button>
        </Box>
      )}

      <Box
        flexGrow={1}
        d={['none', 'none', 'flex']}
        justifyContent="space-between"
        alignItems="center"
        ml={['15px']}
        color="neutral.gray_violet"
        fontWeight="bold"
        fontSize="0.8em"
      >
        {headerMenu.map((item, index) => (
          <Text
            key={index.toString()}
            as="a"
            href={item.link}
            padding="0 15px"
            display="block"
            _hover={{
              cursor: 'pointer',
              color: 'neutral.dark_violet',
            }}
          >
            {item.title}
          </Text>
        ))}
        <Box flexGrow={1} />
        <Box
          padding="0 15px"
          _hover={{
            cursor: 'pointer',
          }}
        >
          Login
        </Box>
        <Button
          padding="5px 15px"
          variant="rounded-cyan"
          borderRadius="20px"
          fontWeight="bold"
          marginLeft="10px"
          fontSize="1em"
          _hover={{
            bg: 'hover.cyan',
          }}
        >
          Sign Up
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
