import React, { useEffect, useState } from 'react';
import { Box, Button, Image, Text, useToast } from '@chakra-ui/react';
import Shorter from '../components/Shorter';
import UrlComonent, { TUrlComponentProps } from '../components/UrlComponent';
import CardComponent, { TCardComponentProps } from '../components/Card';
import BoostComponent from '../components/Boost';

const cards: Array<TCardComponentProps> = [
  {
    icon: '/assets/icon-brand-recognition.svg',
    title: 'Brand Recognition',
    description:
      "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
  },
  {
    icon: '/assets/icon-detailed-records.svg',
    title: 'Detailed Records',
    description:
      'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decision.',
  },
  {
    icon: '/assets/icon-fully-customizable.svg',
    title: 'Fully Customizable',
    description:
      'Improve brand awareness and content discoverability through customizable links supercharging audience engagement.',
  },
];

const Home: React.FC = () => {
  const [urls, seturls] = useState<Array<TUrlComponentProps>>([]);
  const [loading, setloading] = useState<boolean>(false);
  const toast = useToast();

  useEffect(() => {
    fetch('/api/shorten_links', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        seturls(res);
      });
  }, []);

  const shortenUrl = (link: string) => {
    setloading(true);
    fetch('/api/shorten_links', {
      method: 'POST',
      body: JSON.stringify({
        url: link,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (!res.error) {
          seturls([...urls, res]);
        } else {
          toast({
            title: 'Url Invalid',
            description: res.error,
            status: 'error',
            duration: 5000,
            isClosable: true,
          });
        }
        setloading(false);
      });
  };

  const onCopy = (shorten: string) => {
    const newUrls = urls.map((url) => {
      if (url.shorten === shorten) {
        return {
          shorten,
          origin: url.origin,
          copied: true,
        };
      }
      return {
        shorten: url.shorten,
        origin: url.origin,
        copied: false,
      };
    });

    seturls(newUrls);
  };

  return (
    <Box>
      <Box
        id="homepage-banner"
        display="flex"
        pl={['20px', '20px', '100px']}
        pr={['20px', '20px', '0']}
        justifyContent="space-between"
        maxWidth="1440px"
        m="0 auto"
        mt={['0px', '0px', '50px']}
        flexDir={['column-reverse', 'column-reverse', 'row']}
      >
        <Box display="flex" flexDirection="column" justifyContent="center" mt={{ sm: '20px' }}>
          <Text
            d={['none', 'none', 'block']}
            fontSize="6xl"
            fontWeight="bold"
            lineHeight="69px"
            alignItems="center"
            color="neutral.dark_violet"
          >
            More than just
            <br />
            shorter links
          </Text>
          <Text
            d={['block', 'block', 'none']}
            fontSize="2.75rem"
            fontWeight="bold"
            lineHeight="53px"
            alignItems="center"
            color="neutral.dark_violet"
            textAlign="center"
          >
            More than just shorter links
          </Text>
          <Text d={['none', 'none', 'block']} fontSize="1.2em" color="neutral.gray_violet" mt="4px">
            Build your brand's recognition get detailed <br />
            insights on how your links are performing.
          </Text>
          <Text
            d={['block', 'block', 'none']}
            fontSize="1.2em"
            color="neutral.gray_violet"
            mt="4px"
            textAlign="center"
            mb="40px"
          >
            Build your brand's recognition get detailed insights on how your links are performing.
          </Text>
          <Button
            padding="26px 38px"
            variant="rounded-cyan"
            w="fit-content"
            fontSize="1.2em"
            m={['0 auto', '0 auto', '40px 0']}
            _hover={{
              bg: 'hover.cyan',
            }}
          >
            Get Started
          </Button>
        </Box>
        <Box>
          <Image src="/assets/illustration-working.svg" w="680px" ml={['0px', '0px', '100px']} />
        </Box>
      </Box>
      <Box
        bg="neutral.gray_light"
        mt="130px"
        position="relative"
        px="calc(50% - 620px)"
        pb="100px"
        pt={['80px', '80px', '50px']}
      >
        <Box position="absolute" top={['-70px', '-70px', '-50px']} w="100%" left="0">
          <Shorter shortenUrl={shortenUrl} loading={loading} />
        </Box>
        {urls.map((url, index) => (
          <UrlComonent
            key={index.toString()}
            origin={url.origin}
            shorten={url.shorten}
            copied={url.copied}
            setCopiedUrl={onCopy}
          />
        ))}
        <Box>
          <Text
            color="neutral.dark_violet"
            fontWeight="bold"
            fontSize="2rem"
            textAlign="center"
            mt="75px"
          >
            Advance Statistics
          </Text>
          <Text d={['none', 'none', 'block']} textAlign="center" color="neutral.gray" mt="10px">
            Track how your links are performing across the web <br /> with our advanced statistics
            dashboard
          </Text>
          <Text
            d={['block', 'block', 'none']}
            textAlign="center"
            color="neutral.gray"
            mt="10px"
            px="20px"
          >
            Track how your links are performing across the web with our advanced statistics
            dashboard
          </Text>
        </Box>
        <Box display="flex" mt="50px" position="relative" flexDir={['column', 'column', 'row']}>
          {cards.map(({ icon, title, description }: TCardComponentProps, index: number) => (
            <CardComponent
              key={index.toString()}
              mt={50 * index}
              icon={icon}
              title={title}
              description={description}
            />
          ))}
          <Box
            position="absolute"
            bottom="160px"
            h="6px"
            bg="primary.cyan"
            w="80%"
            mx="25px"
            display={['none', 'none', 'block']}
          />
          <Box
            position="absolute"
            bottom="60px"
            left="calc(50% - 27px)"
            h="80%"
            bg="primary.cyan"
            w="6px"
            mx="25px"
            display={['block', 'block', 'none']}
          />
        </Box>
      </Box>
      <BoostComponent />
    </Box>
  );
};

export default Home;
