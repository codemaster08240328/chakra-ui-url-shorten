import React, { useState } from 'react';
import Link from 'next/link';
import { Box, Image, Text } from '@chakra-ui/react';
import SocialIcon from './SocialIcon';

const footerMenu = [
  {
    title: 'Features',
    subitems: ['Link Shortening', 'Branded Links', 'Analytics'],
  },
  {
    title: 'Resources',
    subitems: ['Blog', 'Developers', 'Support'],
  },
  {
    title: 'Company',
    subitems: ['About', 'Our Team', 'Careers'],
  },
];

const socialIcons: Array<'facebook' | 'twitter' | 'pinterest' | 'instagram'> = [
  'facebook',
  'twitter',
  'pinterest',
  'instagram',
];

const Footer: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | undefined>(undefined);

  return (
    <Box bg="neutral.dark_violet">
      <Box
        d="flex"
        w="100%"
        maxWidth="1440px"
        m="0 auto"
        p={['50px 15px', '50px 15px', '50px 100px']}
        flexDir={['column', 'column', 'row']}
      >
        <Link href="/">
          <Box d="flex" justifyContent="center">
            <Image src="/assets/footer-logo.svg" height="fit-content" width="fit-content" />
          </Box>
        </Link>
        <Box flexGrow={1} />
        {footerMenu.map((item, i) => (
          <Box key={i.toString()} mr={['0px', '0px', '60px']}>
            <Text
              as="h3"
              color="white"
              fontWeight="bold"
              textAlign={['center', 'center', 'left']}
              mt={['40px', '40px', '0']}
            >
              {item.title}
            </Text>
            {item.subitems.map((subitem, index) => (
              <Text
                key={index.toString()}
                as="a"
                href="#"
                display="block"
                mt="10px"
                color="neutral.gray"
                textAlign={['center', 'center', 'left']}
                _hover={{
                  cursor: 'pointer',
                  color: 'primary.cyan',
                }}
              >
                {subitem}
              </Text>
            ))}
          </Box>
        ))}
        <Box d="flex" ml={['-30px', '-30px']} justifyContent="center" mt={['40px', '40px', '0']}>
          {socialIcons.map((icon, index) => (
            <Box
              key={index.toString()}
              w="24px"
              ml="30px"
              onMouseOver={() => setHoveredIndex(index)}
              onMouseOut={() => setHoveredIndex(10)}
              py={icon === 'twitter' ? '2px' : '0'}
            >
              <SocialIcon iconType={icon} hovered={index === hoveredIndex} />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
