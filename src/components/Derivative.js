import Contracts from "@/constants/contracts";
import { derivativeTypes, derivativeStates } from "@/constants/derivatives";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import SpacetimeERC721 from "./../constants/abi/SpacetimeERC721.json";
import React from "react";
import { useAccount, useContractWrite, usePrepareContractWrite } from "wagmi";

export default function Derivative({ derivative, view, address }) {
  const { address: currentAddress } = useAccount();
  const shorten = (address) => {
    return address.slice(0, 6) + "..." + address.slice(-4);
  };
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

  const { config: listConfig } = usePrepareContractWrite({
    address: Contracts.SpacetimeERC721,
    abi: SpacetimeERC721.abi,
    functionName: "setPrice",
    args: [tokenId, 10000],
  });
  const { write: listWrite } = useContractWrite(listConfig);

  const { config: proposalConfig } = usePrepareContractWrite({
    address: Contracts.SpacetimeERC721,
    abi: SpacetimeERC721.abi,
    functionName: "submitDealProposal",
    args: [tokenId],
  });
  const { write: proposalWrite } = useContractWrite(proposalConfig);

  const { config: closeConfig } = usePrepareContractWrite({
    address: Contracts.SpacetimeERC721,
    abi: SpacetimeERC721.abi,
    functionName: "completeDealManual",
    args: [tokenId],
  });
  const { write: closeWrite } = useContractWrite(closeConfig);

  const { config: tradeConfig } = usePrepareContractWrite({
    address: Contracts.SpacetimeERC721,
    abi: SpacetimeERC721.abi,
    functionName: "purchase",
    args: [tokenId, 1337],
  });
  const { write: tradeWrite } = useContractWrite(tradeConfig);

  return (
    <Box
      sx={{
        width: 380,
        border: "1px solid white",
        padding: 2,
        borderRadius: 4,
      }}
    >
      <Typography>{tokenId}</Typography>
      <Stack direction="row" justifyContent="space-between" sx={{ padding: 1 }}>
        <Typography variant="subtitle2">Type</Typography>
        <Typography variant="subtitle2">
          {derivativeTypes[derivativeType]}
        </Typography>
      </Stack>
      <Divider />
      <Stack direction="row" justifyContent="space-between" sx={{ padding: 1 }}>
        <Typography variant="subtitle2">State</Typography>
        <Typography variant="subtitle2">
          {derivativeStates[derivativeState]}
        </Typography>
      </Stack>
      <Divider />
      <Stack direction="row" justifyContent="space-between" sx={{ padding: 1 }}>
        <Typography variant="subtitle2">Size</Typography>
        <Typography variant="subtitle2">{size.toString()}</Typography>
      </Stack>
      <Divider />
      <Stack direction="row" justifyContent="space-between" sx={{ padding: 1 }}>
        <Typography variant="subtitle2">Client</Typography>
        <Typography variant="subtitle2">
          {hasClient ? client.toString() : "NA"}
        </Typography>
      </Stack>
      <Divider />
      <Stack direction="row" justifyContent="space-between" sx={{ padding: 1 }}>
        <Typography variant="subtitle2">Client Eth</Typography>
        <Typography variant="subtitle2">
          {hasClient ? shorten(clientEthAddress) : "NA"}
        </Typography>
      </Stack>
      <Divider />
      <Stack direction="row" justifyContent="space-between" sx={{ padding: 1 }}>
        <Typography variant="subtitle2">Provider</Typography>
        <Typography variant="subtitle2">{provider.toString()}</Typography>
      </Stack>
      <Divider />
      <Stack direction="row" justifyContent="space-between" sx={{ padding: 1 }}>
        <Typography variant="subtitle2">Provider Eth</Typography>
        <Typography variant="subtitle2">
          {shorten(providerEthAddress)}
        </Typography>
      </Stack>
      <Divider />
      <Stack direction="row" justifyContent="space-between" sx={{ padding: 1 }}>
        <Typography variant="subtitle2">Deal Start</Typography>
        <Typography variant="subtitle2">{dealTermStart.toString()}</Typography>
      </Stack>
      <Divider />
      <Stack direction="row" justifyContent="space-between" sx={{ padding: 1 }}>
        <Typography variant="subtitle2">Deal Duration</Typography>
        <Typography variant="subtitle2">
          {dealTermDuration.toString()}
        </Typography>
      </Stack>
      <Divider />
      <Stack direction="row" justifyContent="space-between" sx={{ padding: 1 }}>
        <Typography variant="subtitle2">Price Per Epoch</Typography>
        <Typography variant="subtitle2">{pricePerEpoch.toString()}</Typography>
      </Stack>
      <Divider />
      <Stack direction="row" justifyContent="space-between" sx={{ padding: 1 }}>
        <Typography variant="subtitle2">On Sale</Typography>
        <Typography variant="subtitle2">{onSale.toString()}</Typography>
      </Stack>
      <Divider />
      <Stack direction="row" justifyContent="space-between" sx={{ padding: 1 }}>
        <Typography variant="subtitle2">Price</Typography>
        <Typography variant="subtitle2">
          {onSale ? salePrice.toString() : "NA"}
        </Typography>
      </Stack>
      <Stack direction="row" justifyContent="center" alignItems="center">
        <Button
          size="small"
          onClick={() => {
            buyWrite?.();
          }}
          disabled={!buyEnabled}
        >
          Buy
        </Button>
        <Button
          size="small"
          onClick={() => {
            listWrite?.();
          }}
          disabled={!listEnabled}
        >
          List
        </Button>
        <Button
          size="small"
          onClick={() => {
            proposalWrite?.();
          }}
          disabled={!proposalEnabled}
        >
          Proposal
        </Button>
        <Button
          size="small"
          onClick={() => {
            closeWrite?.();
          }}
          disabled={!closeEnabled}
        >
          Close
        </Button>
        <Button
          size="small"
          onClick={() => {
            tradeWrite?.();
          }}
          disabled={!tradeEnabled}
        >
          Trade
        </Button>
      </Stack>
    </Box>
  );
}
