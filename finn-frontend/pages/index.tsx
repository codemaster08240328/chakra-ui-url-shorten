import React, { useEffect, useState } from 'react';
import { Box, Button, Image, Text, useToast } from '@chakra-ui/react'
import Shorter from '../components/Shorter';
import UrlComonent, { TUrlComponentProps } from '../components/UrlComponent';
import CardComponent, { TCardComponentProps } from '../components/Card';
import BoostComponent from '../components/Boost';

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
];


const Home: React.FC = () => {
  const [urls, seturls] = useState<Array<TUrlComponentProps>>([])
  const [loading, setloading] = useState<boolean>(false);
  const toast = useToast();

  useEffect(() => {
    fetch('/api/shorten_links', {
      method: 'GET'
    })
      .then(res => res.json())
      .then(res => {
        seturls(res);
      })
  }, []);

  const shortenUrl = (link: string) => {
    setloading(true)
    fetch('/api/shorten_links', {
      method: 'POST',
      body: JSON.stringify({
        url: link
      })
    })
    .then(res => res.json())
    .then(res => {
      if (!res.error) {
        console.log(res)
        console.log(urls)
        seturls([...urls, res]);
      } else {
        toast({
          title: 'Url Invalid',
          description: res.error,
          status: 'error',
          duration: 5000,
          isClosable: true
        });
      }
      setloading(false);
    })
  }

  const onCopy = (shorten: string) => {
    const newUrls = urls.map(url => {
      if (url.shorten === shorten) {
        return {
          shorten,
          origin: url.origin,
          copied: true,
        }
      } 
      return {
        shorten: url.shorten,
        origin: url.origin,
        copied: false,
      }
    });

    seturls(newUrls);
  }

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
          <Text
            fontSize="6xl"
            fontWeight="bold"
            lineHeight="69px"
            alignItems="center"
            color="neutral.dark_violet"
          >
            More than just<br />shorter links
          </Text>
          <Text
            fontSize="1.2em"
            color="neutral.gray_violet"
            marginTop="4px"
          >
            Build your brand's recognition get detailed <br/>insights on how your links are performing.
          </Text>
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
        <Shorter shortenUrl={shortenUrl} loading={loading} />
        {
          urls.map((url, index) => (
            <UrlComonent
              key={index.toString()}
              origin={url.origin}
              shorten={url.shorten}
              copied={url.copied}
              setCopiedUrl={onCopy}
            />
          ))
        }
        <Box>
          <Text
            color="neutral.dark_violet"
            fontWeight="bold"
            fontSize="4xl"
            textAlign="center"
            mt="75px"
          >
            Advance Statistics
          </Text>
          <Text
            textAlign="center"
            color="neutral.gray"
            mt='10px'
          >
            Track how your links are performing across the web <br /> with our advanced statistics dashboard
          </Text>
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
