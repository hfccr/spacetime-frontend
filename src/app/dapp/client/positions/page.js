"use client";
import MarketTable from "@/components/MarketTable";
import { Typography } from "@mui/material";
import React from "react";
import { useAccount } from "wagmi";

export default function Positions() {
  const { address } = useAccount();
  return <MarketTable address={address} view="client" />;
}
