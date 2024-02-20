import '@rainbow-me/rainbowkit/styles.css';
import {
  NETWORK_CONFIG,
  PROJECT_CONFIG,
} from "@/constants/global";
import {
  zkFairTestnet,
  zkFair,
} from 'wagmi/chains';
import { WALLETCONNECT_CONFIG } from "@/constants/walletconnect";
import { QueryClient } from '@tanstack/react-query';
import { Config, createConfig, http } from 'wagmi';
import { useEffect, useState } from "react";
import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { Client, createPublicClient, createWalletClient, publicActions } from 'viem';

export default () => {
  const [wagmiDefaultConfig, setWagmiDefaultConfig] = useState<Config | null>(null);
  const [wagmiConfig, setWagmiConfig] = useState<Config | null>(null);
  const [wagmiChains, setWagmiChains] = useState<any | null>(null);
  const [queryClient, setQueryClient] = useState<QueryClient | null>(null);
  const [wagmiInitialized, setWagmiInitialized] = useState<boolean>(false);

  useEffect(() => setWagmiInitialized(true), []);

  useEffect(() => {
    indexedDB?.deleteDatabase('WALLET_CONNECT_V2_INDEXED_DB');
    console.log("Initializing Wagmi");

    const defaultConfig = getDefaultConfig({
      appName: PROJECT_CONFIG.name,
      projectId: WALLETCONNECT_CONFIG.projectId,
      chains: [zkFairTestnet, zkFair],
      transports: {
        [zkFairTestnet.id]: http(),
        [zkFair.id]: http(),
      },
    });
    setWagmiDefaultConfig(defaultConfig);
    setWagmiChains(defaultConfig.chains);

    const config = createConfig({
      chains: [zkFairTestnet, zkFair],
      transports: {
        [zkFairTestnet.id]: http(),
        [zkFair.id]: http(),
      },
    });
    setWagmiConfig(config);

    const queryClient = new QueryClient();
    setQueryClient(queryClient);
  }, []);

  const publicClient = createPublicClient({
    chain: NETWORK_CONFIG.chains[0],
    transport: http(),
  });

  const walletClient: Client = createWalletClient({
    chain: NETWORK_CONFIG.chains[0],
    transport: http(),
  }).extend(publicActions);

  return {
    wagmiDefaultConfig,
    wagmiChains,
    wagmiConfig,
    publicClient,
    walletClient,
    queryClient,
    wagmiInitialized,
  };
};
