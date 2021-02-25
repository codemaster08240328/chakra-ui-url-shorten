import React from 'react';
import '../styles/globals.scss';
import { ChakraProvider } from '@chakra-ui/react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { Fonts } from '../styles/Global';
import theme from '../styles/Theme';

const MyApp: React.FC<{Component: React.FC, pageProps: any}> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  )
}

export default MyApp;
