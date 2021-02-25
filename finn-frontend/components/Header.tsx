import React from 'react';
import { Box, Button, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';

type TMenu = {
  title: string;
  link: string;
}

const headerMenu: Array<TMenu> = [{
  title: 'Features',
  link: '#'
},{
  title: 'Pricing',
  link: '#'
},{
  title: 'Resources',
  link: '#'
}];

const Header = () => {
  return (
    <Box 
      padding="35px 100px"
      display="flex"
      alignItems="center"
      maxWidth="1440px"
      marginLeft="calc(50% - 720px)"
    >
      <Link href="/">
        <Image
          flexGrow={0}
          src='/assets/logo.svg'
          height="fit-content"
        />
      </Link>

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
        {
          headerMenu.map((menu, index) => 
            <Text
              key={index.toString()}
              as="a"
              href={menu.link}
              padding="0 15px"
              display="block"
              _hover={{
                cursor: 'pointer',
                color: 'neutral.dark_violet',
              }}
            >{menu.title}</Text>
          )
        }
        <Box flexGrow={1} />
        <Box 
          padding="0 15px"
          _hover={{
            cursor: 'pointer'
          }}  
        >Login</Box>
        <Button 
          padding="5px 15px"
          variant="rounded-cyan"
          borderRadius="20px"
          fontWeight="bold"
          marginLeft="10px"
          fontSize="1em"
          _hover={{
            bg: 'hover.cyan'
          }}
        >
          Sign Up
        </Button>
      </Box>
    </Box>
  )
}

export default Header;
