import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Fonts from '../styles/Global';
import theme from '../styles/Theme';
import '../styles/global.scss';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MyApp: React.FC<{ Component: React.FC; pageProps: any }> = ({ Component, pageProps }) => (
  <ChakraProvider theme={theme}>
    <Fonts />
    <Header />
    <Component {...pageProps} />
    <Footer />
  </ChakraProvider>
);

export default MyApp;
