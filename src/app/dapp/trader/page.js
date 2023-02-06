"use client";
import React from "react";
import MarketTable from "@/components/MarketTable";
import { useAccount } from "wagmi";
import { Container } from "@mui/material";
import {
  Tab,
  Box,
  Divider,
  Stack,
  Tabs,
  Tooltip,
  Typography,
} from "@mui/material";

export default function Client() {
  const { address } = useAccount();
  return (
    <Container maxWidth="md">
      <Tooltip title="Trader">
        <Box
          component="span"
          sx={{
            marginBottom: 2,
            fontFamily: "Cube",
            fontSize: "x-large",
            cursor: "pointer",
          }}
        >
          Trader
        </Box>
      </Tooltip>
      <Typography sx={{ marginTop: 1, marginBottom: 4 }}>
        Speculate on the price of Storage
      </Typography>
      <MarketTable />
    </Container>
  );
}
