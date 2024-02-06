import { zkFairTestnet, zkFair } from "wagmi/chains";

export const DEBUG = true;

export const PROJECT_CONFIG = {
  name: "Bitcoin Maid",
  description: "Bitcoin Maid",
  url: "https://zkfairy.com",
};

export const NETWORK_CONFIG = {
  chains: [zkFairTestnet, zkFair],
};
