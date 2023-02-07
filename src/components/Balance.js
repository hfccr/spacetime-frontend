"use client";

import { useState, useEffect } from "react";
import {
  Skeleton,
  Button,
  ButtonGroup,
  Tooltip,
  Typography,
  Box,
  Stack,
} from "@mui/material";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import {
  useAccount,
  useConnect,
  useEnsName,
  useDisconnect,
  useBalance,
} from "wagmi";
import toast from "react-hot-toast";
import { fvmChain } from "@/util/chain";
import { motion } from "framer-motion";
import { newDelegatedEthAddress } from "@glif/filecoin-address";
import { Beryx } from "@zondax/beryx";
import { useTokenBalance } from "@/hooks/useSpacetimeToken";

export default function Balance({}) {
  const [hydrated, setHydrated] = useState(false);
  const { address } = useAccount();
  const { data, isError, isLoading, isSuccess } = useBalance({
    address,
  });
  const {
    tokenBalance,
    isLoading: tokenBalanceLoading,
    isSuccess: tokenBalanceSuccess,
    isError: tokenBalanceError,
  } = useTokenBalance(address);
  useEffect(() => {
    setHydrated(true);
  }, []);
  return (
    <Box
      element="div"
      sx={{ border: "1px solid gray", borderRadius: 4, padding: 3 }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h4">Balance</Typography>
        {isLoading && <Skeleton variant="text" sx={{ fontSize: "1rem" }} />}
        {isSuccess && (
          <Typography variant="subtitle1">{`${(+data.formatted).toFixed(4)} ${
            data.symbol
          }`}</Typography>
        )}
      </Stack>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h4">Spacetime Tokens</Typography>
        {tokenBalanceLoading && (
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        )}
        {tokenBalanceSuccess && (
          <Typography variant="subtitle1">{`${(+tokenBalance.toString()).toFixed(
            4
          )} SPT`}</Typography>
        )}
      </Stack>
    </Box>
  );
}
