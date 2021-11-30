import { ChakraProvider } from "@chakra-ui/react";
import theme from "lib/chakra-ui-config/theme";

export default function Global({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
