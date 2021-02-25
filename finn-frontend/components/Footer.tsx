import React, { useState } from 'react';
import Link from 'next/link';
import { Box, Image, Text } from '@chakra-ui/react';
import SocialIcon from '../components/SocialIcon';

const footer_menu = [
  {
    title: 'Features',
    subitems: ['Link Shortening', 'Branded Links', 'Analytics']
  },
  {
    title: 'Resources',
    subitems: ['Blog', 'Developers', 'Support']
  },
  {
    title: 'Company',
    subitems: ['About', 'Our Team', 'Careers']
  },
]

const social_icons: Array<'facebook' | 'twitter' | 'pinterest' | 'instagram'> = [
  'facebook', 'twitter', 'pinterest', 'instagram'
];

const Footer = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | undefined>(undefined);

  return (
    <Box
      bg="neutral.dark_violet"
      display="flex"
      px="calc(50% - 620px)"
      py="50px"
    >
      <Link
        href="/"
      >
        <Image 
          src="/assets/footer-logo.svg"
          height="fit-content"
        />
      </Link>
      <Box flexGrow={1} />
      {
        footer_menu.map((item, i) => (
          <Box
            key={i.toString()}
            mr="60px"
          >
            <Text 
              as="h3"
              color="white"
              fontWeight="bold"
            >
              {item.title}
            </Text>
            {
              item.subitems.map((subitem, index) => (
                <Text
                  key={index.toString()}
                  as="a"
                  href="#"
                  display="block"
                  mt="10px"
                  color="neutral.gray"
                  _hover={{
                    cursor: 'pointer',
                    color: 'primary.cyan'
                  }}
                >{subitem}</Text>
              ))
            }
          </Box>
        ))
      }
      {
        social_icons.map((icon, index) => (
          <Box
            key={index.toString()}
            w="24px"
            ml="30px"
            onMouseOver={() => setHoveredIndex(index)}
            onMouseOut={() => setHoveredIndex(10)}
            py={icon === 'twitter' ? '2px' : '0'}
          >
            <SocialIcon
              iconType={icon}
              hovered={index === hoveredIndex} />
          </Box>
        ))
      }
    </Box>
  );
};


export default Footer;
