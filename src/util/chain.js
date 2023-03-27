"use client";
import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { configureChains, createClient } from "wagmi";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { filecoin, filecoinHyperspace } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

export const fvmChain = filecoinHyperspace;

export const { chains, provider, webSocketProvider } = configureChains(
  [filecoinHyperspace],
  [publicProvider()]
);

export const { connectors } = getDefaultWallets({
  appName: "Spacetime",
  chains,
});

export const client = createClient({
  autoConnect: true,
  provider,
  connectors,
});
