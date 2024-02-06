import { NETWORK_CONFIG, PROJECT_CONFIG } from "./global";

export const WALLETCONNECT_CONFIG = {
  chains: NETWORK_CONFIG.chains,
  defaultChain: NETWORK_CONFIG.chains[0],
  projectId: "d2abb5ff2e3a187694b180a5b1c10868",
  metadata: {
    name: PROJECT_CONFIG.name,
    description: PROJECT_CONFIG.description,
    url: PROJECT_CONFIG.url,
    icons: [`${PROJECT_CONFIG.url}/logo.png`],
  },
};
