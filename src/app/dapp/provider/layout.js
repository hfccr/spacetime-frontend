"use client";
import React from "react";
import {
  Tab,
  Box,
  Divider,
  Stack,
  Tabs,
  Tooltip,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ProviderLayout({ children }) {
  const path = usePathname();
  let selected = "about";
  if (path.indexOf("positions") >= 0) {
    selected = "positions";
  } else if (path.indexOf("create") >= 0) {
    selected = "create";
  } else if (path.indexOf("market") >= 0) {
    selected = "market";
  }
  return (
    <>
      <Tooltip title="Provider">
        <Box
          component="span"
          sx={{
            marginBottom: 2,
            fontFamily: "Cube",
            fontSize: "x-large",
            cursor: "pointer",
          }}
        >
          Provider
        </Box>
      </Tooltip>
      <Stack direction="row" sx={{ padding: 2, marginTop: 4 }} spacing={4}>
        <Tabs
          orientation="vertical"
          variant="standard"
          aria-label="client menu vertical"
          value={selected}
          sx={{
            borderRight: 1,
            borderColor: "divider",
            flexShrink: 0,
            width: "220px",
            alignContent: "flex-start",
          }}
        >
          <Tab
            label="About"
            value="about"
            href="/dapp/provider/about"
            LinkComponent={Link}
            sx={{ alignItems: "flex-start", fontSize: "large" }}
          />
          <Tab
            label="Positions"
            value="positions"
            href="/dapp/provider/positions"
            LinkComponent={Link}
            sx={{ alignItems: "flex-start", fontSize: "large" }}
          />
          <Tab
            label="Create Position"
            value="create"
            href="/dapp/provider/create"
            LinkComponent={Link}
            sx={{ alignItems: "flex-start", fontSize: "large" }}
          />
          <Tab
            label="Market"
            value="market"
            href="/dapp/provider/market"
            LinkComponent={Link}
            sx={{ alignItems: "flex-start", fontSize: "large" }}
          />
        </Tabs>
        <>{children}</>
      </Stack>
    </>
  );
}
