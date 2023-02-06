import Contracts from "@/constants/contracts";
import { derivativeTypes, derivativeStates } from "@/constants/derivatives";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import SpacetimeERC721 from "./../constants/abi/SpacetimeERC721.json";
import React from "react";
import { useAccount, useContractWrite, usePrepareContractWrite } from "wagmi";

export default function BuyButton({ derivative, view, address }) {
  const { address: currentAddress } = useAccount();
  const {
    derivativeType,
    derivativeState,
    size,
    client,
    clientEthAddress,
    provider,
    providerEthAddress,
    dealTermStart,
    dealTermDuration,
    pricePerEpoch,
    onSale,
    salePrice,
    tokenId,
  } = derivative;
  const proposalEnabled =
    currentAddress === clientEthAddress && derivativeState === 1;
  const closeEnabled =
    currentAddress === providerEthAddress &&
    (derivativeState === 1 || derivativeState === 2);
  const buyEnabled = derivativeState === 0;
  const listEnabled = derivativeState === 1 && onSale === false;
  const hasClient =
    clientEthAddress !== "0x0000000000000000000000000000000000000000";
  const tradeEnabled = derivativeState === 1 && onSale === true;
  const { config: buyConfig } = usePrepareContractWrite({
    address: Contracts.SpacetimeERC721,
    abi: SpacetimeERC721.abi,
    functionName: "setClient",
    args: [tokenId, 1337],
  });
  const { write: buyWrite } = useContractWrite(buyConfig);

  return (
    <Button
      size="small"
      onClick={() => {
        console.log("buy");
        buyWrite?.();
      }}
      disabled={!buyEnabled}
    >
      Buy
    </Button>
  );
}
