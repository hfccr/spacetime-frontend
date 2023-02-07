"use client";
import CreatePositionForm from "@/components/CreatePositionForm";
import { Box, Button, Stack, Typography } from "@mui/material";
import {
  useContractWrite,
  usePrepareContractWrite,
  useProvider,
  useSigner,
} from "wagmi";
import SpacetimeDAOABI from "./SpacetimeDAO.json";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useAccount } from "wagmi";
import Contracts from "@/constants/contracts";
import { fvmChain } from "@/util/chain";
import { createDerivative } from "@/hooks/derivativeStateChange";

export default function Create() {
  const { data: ethSigner } = useSigner(fvmChain.id);
  const ethProvider = useProvider(fvmChain.id);
  const [fdata, setData] = useState({});
  const [dataSet, setDataSet] = useState(false);
  // const { config } = usePrepareContractWrite({
  //   address: Contracts.SpacetimeDAO,
  //   abi: SpacetimeDAOABI.abi,
  //   functionName: "createDerivative",
  //   args: [fdata.type, fdata.dealSize, 1130, 80339, fdata.term, fdata.price],
  //   // args: [0, 10000, 1130, 80339, 10000, 100000],
  //   onSuccess: () => {},
  //   onError: () => {},
  // });
  // const { data, isLoading, isSuccess, write, status } =
  //   useContractWrite(config);
  const onSubmit = async (data) => {
    // setData(data);
    // setDataSet(true);
    toast.success("Creating Derivative");
    createDerivative(ethProvider, ethSigner, data);
  };
  const create = () => {
    toast.success("Creating Derivative");
  };
  return (
    <Box sx={{ width: "100%" }}>
      {dataSet && (
        <Stack justifyContent="center" alignItems="center">
          <Button onClick={create}>Confirm Derivative Creation</Button>
        </Stack>
      )}
      {!dataSet && <CreatePositionForm actor="client" onSubmit={onSubmit} />}
      <Typography sx={{ margin: 4 }}>
        You must be a member of Spacetime DAO before creating a deal
      </Typography>
      <Typography sx={{ margin: 4 }}>
        You may need to speed up your MetaMask transaction if it fails
      </Typography>
    </Box>
  );
}
