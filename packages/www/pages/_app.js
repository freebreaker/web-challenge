import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { BlockchainStore } from '@cosmology/core';
import { StoreProvider } from '@cosmology/react';

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac'
  }
};

const theme = extendTheme({ colors });

const store = new BlockchainStore();

function CosmologyApp({ Component, pageProps }) {
  return (
    <StoreProvider store={store}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </StoreProvider>
  );
}

export default CosmologyApp;
