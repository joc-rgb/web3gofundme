import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Web3Provider } from "../context/Web3Context";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <Web3Provider>
      <ChakraProvider>
        <Navbar />
        <Component {...pageProps} />
      </ChakraProvider>
    </Web3Provider>
  );
}

export default MyApp;
