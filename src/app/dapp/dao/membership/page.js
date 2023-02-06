"use client";
import Balance from "@/components/Balance";
import {
  Button,
  CircularProgress,
  Container,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useIsMember } from "@/hooks/useSpacetimeDAO";
import { useAccount } from "wagmi";
import { isAbsoluteUrl } from "next/dist/shared/lib/utils";
import { useContractWrite, usePrepareContractWrite } from "wagmi";
import Contracts from "@/constants/contracts";
import SpacetimeDAOABI from "./SpacetimeDAO.json";
import { toast } from "react-hot-toast";

const memberText = "You are a member of Spacetime DAO";
const nonMemberText =
  "You are not a member of Spacetime DAO. Storage providers need to be a member of Spacetime DAO in order to create positions. You will receive 1000 SPT tokens on joining.";

export default function About() {
  const { config: joinConfig } = usePrepareContractWrite({
    address: Contracts.SpacetimeDAO,
    abi: SpacetimeDAOABI.abi,
    functionName: "join",
  });
  const { config: leaveConfig } = usePrepareContractWrite({
    address: Contracts.SpacetimeDAO,
    abi: SpacetimeDAOABI.abi,
    functionName: "quit",
  });
  const {
    data: joinData,
    isLoading: joinIsLoading,
    isSuccess: joinIsSuccess,
    write: joinWrite,
    status: joinStatus,
  } = useContractWrite(joinConfig);
  const {
    data: leaveData,
    isLoading: leaveIsLoading,
    isSuccess: leaveIsSuccess,
    write: leaveWrite,
  } = useContractWrite(leaveConfig);
  const { address } = useAccount();
  const {
    isMember,
    isSuccess: memberSuccess,
    isLoading: memberIsLoading,
    status: leaveStatus,
  } = useIsMember(address);
  let text = nonMemberText;
  if (memberSuccess && isMember) {
    text = memberText;
  }
  const join = () => {
    joinWrite?.();
    toast.success("Getting you to join the DAO");
  };
  const leave = () => {
    leaveWrite?.();
    toast.success("Making you get out of the DAO");
  };
  const anyLoad =
    joinIsLoading ||
    leaveIsLoading ||
    memberIsLoading ||
    joinStatus === "loading" ||
    leaveStatus === "loading";
  return (
    <Container>
      <Stack justifyContent={"center"} alignItems="center" spacing={4}>
        {anyLoad && <CircularProgress />}
        {!anyLoad && (
          <>
            <Typography>{text}</Typography>
            <LinearProgress sx={{ width: 300 }} />
            {memberSuccess && !isMember && (
              <Button onClick={join}>Join DAO</Button>
            )}
            {memberSuccess && isMember && (
              <Button onClick={leave}>Leave DAO</Button>
            )}
          </>
        )}
      </Stack>
    </Container>
  );
}
