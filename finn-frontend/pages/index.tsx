import React from 'react';
import { Box, Button, Image } from '@chakra-ui/react'
import Shorter from '../components/Shorter';
import UrlComonent, { TUrlComponentProps } from '../components/UrlComponent';
import CardComponent, { TCardComponentProps } from '../components/Card';
import BoostComponent from '../components/Boost';

const urls: Array<TUrlComponentProps> = [
  {
    origin: 'https://frontendmentor.io',
    shorten: 'https://rel.ink/kkk',
    copied: false
  },
  {
    origin: 'https://www.linkedin.io/company/frontend-mentor',
    shorten: 'https://rel.ink/kkk',
    copied: true
  },
  {
    origin: 'https://twitter.com/frontendmentor',
    shorten: 'https://rel.ink/kkk',
    copied: false
  }
]

const cards: Array<TCardComponentProps> = [
  {
    icon: '/assets/icon-brand-recognition.svg',
    title: 'Brand Recognition',
    description: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
  },{
    icon: '/assets/icon-detailed-records.svg',
    title: 'Detailed Records',
    description: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decision."
  },{
    icon: '/assets/icon-fully-customizable.svg',
    title: 'Fully Customizable',
    description: "Improve brand awareness and content discoverability through customizable links supercharging audience engagement."
  }
]

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
            color="neutral.dark_violet"
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
          <Button
            padding="26px 38px"
            variant="rounded-cyan"
            width="fit-content"
            fontSize="1.2em"
            marginTop="40px"
            _hover={{
              bg: 'hover.cyan'
            }}
          >
            Get Started
          </Button>
        </Box>
        <Box>
          <Image 
            src="/assets/illustration-working.svg"
            width="680px"
            marginLeft="100px"
          />
        </Box>
      </Box>
      <Box 
        bg="neutral.gray_light"
        marginTop="130px"
        position="relative"
        py="50px"
        px="calc(50% - 620px)"
        pb="100px"
      >
        <Shorter />
        {
          urls.map((url, index) => (
            <UrlComonent
              key={index.toString()}
              origin={url.origin}
              shorten={url.shorten}
              copied={url.copied}
            />
          ))
        }
        <Box>
          <Box
            color="neutral.dark_violet"
            fontWeight="bold"
            fontSize="4xl"
            textAlign="center"
            mt="75px"
          >
            Advance Statistics
          </Box>
          <Box
            textAlign="center"
            color="neutral.gray"
            mt='10px'
          >
            Track how your links are performing across the web <br /> with our advanced statistics dashboard
          </Box>
        </Box>
        <Box
          display="flex"
          mt="50px"
          position="relative"
        >
          {
            cards.map(({icon, title, description}: TCardComponentProps, index: number) => (
              <CardComponent
                key={index.toString()}
                mt={50 * index}
                icon={icon}
                title={title}
                description={description}
              />  
            ))
          }
          <Box
            position="absolute"
            bottom="160px"
            h="6px"
            bg="primary.cyan"
            w="80%"
            mx="25px"
          ></Box>
        </Box>
      </Box>
      <BoostComponent />
    </Box>
  )
}

export default Home;
