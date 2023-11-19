import React from 'react';
import Head from 'next/head';
import { ChakraProvider } from "@chakra-ui/react"
import "../styles/globals.css";
import WithSubnavigation from "../components/Navbar"
import SmallWithSocial from "../components/Footer";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { polygonMumbai, polygonZkEvmTestnet } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { SpicyChain } from "@thirdweb-dev/chains";
import { ThirdwebProvider } from "@thirdweb-dev/react";

// Fonts
import '../public/fonts/satoshi.css';

function MyApp({ Component, pageProps }) {
    
  require("dotenv").config();

  const { chains, publicClient } = configureChains(
    [polygonZkEvmTestnet, polygonMumbai],
    [alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_ID }), publicProvider()]
  );

  const { connectors } = getDefaultWallets({
    appName: "My Polygon ID VC Gated dapp",
    projectId: process.env.NEXT_PUBLIC_APP_WALLET_CONNECT_ID,
    chains,
  });

  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
  });

  return (
    <>
      <Head>
        <title> ⚽ SuperFans</title>
      </Head>
      <ThirdwebProvider activeChain={ SpicyChain } clientId="e96659b9bcc3a53a86d9402b494de2ce">
      <ChakraProvider>
        
            <WithSubnavigation />
              <Component {...pageProps} />
              <SmallWithSocial/>
            
          
      </ChakraProvider>
      </ThirdwebProvider>
    </>
  );
}

export default MyApp;
