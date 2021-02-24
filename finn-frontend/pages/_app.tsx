import React from 'react';
import '../styles/globals.scss';
import { ChakraProvider } from '@chakra-ui/react';

import Header from '../components/Header';
import { Fonts } from '../styles/Global';
import theme from '../styles/Theme';

const MyApp: React.FC<{Component: React.FC, pageProps: any}> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
        <Header />
        <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp;
