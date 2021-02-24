import React from 'react';
import '../styles/globals.scss';
import { ThemeProvider, theme } from '@chakra-ui/core';

const MyApp: React.FC<{Component: React.FC, pageProps: any}> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp;
