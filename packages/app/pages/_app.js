import { ChakraProvider } from "@chakra-ui/react";
import { defaultTheme } from "@cosmology/react";

import { BlockchainStore } from "../testing-mobx/store";
import { StoreProvider } from "../testing-mobx/store-react";

const store = new BlockchainStore();

function CosmologyApp({ Component, pageProps }) {
  return (
    <StoreProvider store={store}>
      <ChakraProvider theme={defaultTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </StoreProvider>
  );
}

export default CosmologyApp;
