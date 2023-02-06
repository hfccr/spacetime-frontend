"use client";
import CreatePositionForm from "@/components/CreatePositionForm";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useContractWrite, usePrepareContractWrite } from "wagmi";
import SpacetimeDAOABI from "./SpacetimeDAO.json";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useAccount } from "wagmi";
import Contracts from "@/constants/contracts";

export default function Create() {
  const [fdata, setData] = useState({});
  const [dataSet, setDataSet] = useState(false);
  const { config } = usePrepareContractWrite({
    address: Contracts.SpacetimeDAO,
    abi: SpacetimeDAOABI.abi,
    functionName: "createDerivative",
    args: [fdata.type, fdata.dealSize, 1130, 80339, fdata.term, fdata.price],
    // args: [0, 10000, 1130, 80339, 10000, 100000],
    onSuccess: () => {},
    onError: () => {},
  });
  const { data, isLoading, isSuccess, write, status } =
    useContractWrite(config);
  const onSubmit = async (data) => {
    setData(data);
    setDataSet(true);
  };
  const create = () => {
    toast.success("Creating Derivative");
    write?.();
  };
  return (
    <Box sx={{ width: "100%" }}>
      {dataSet && (
        <Stack justifyContent="center" alignItems="center">
          <Button onClick={create}>Create Derivative</Button>
        </Stack>
      )}
      {!dataSet && <CreatePositionForm actor="client" onSubmit={onSubmit} />}
      <Typography sx={{ margin: 4 }}>
        You must be a member of Spacetime DAO before creating a deal
      </Typography>
    </Box>
  );
}
