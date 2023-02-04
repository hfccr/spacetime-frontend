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

export default function ClientLayout({ children }) {
  const path = usePathname();
  let selected = "about";
  if (path.indexOf("positions") >= 0) {
    selected = "positions";
  } else if (path.indexOf("create") >= 0) {
    selected = "create";
  }
  return (
    <>
      <Tooltip title="Client">
        <Box
          component="span"
          sx={{
            marginBottom: 2,
            fontFamily: "Cube",
            fontSize: "x-large",
            cursor: "pointer",
          }}
        >
          Client
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
            width: "200px",
            alignContent: "flex-start",
          }}
        >
          <Tab
            label="About"
            value="about"
            href="/dapp/client/about"
            LinkComponent={Link}
            sx={{ alignItems: "flex-start" }}
          />
          <Tab
            label="Positions"
            value="positions"
            href="/dapp/client/positions"
            LinkComponent={Link}
            sx={{ alignItems: "flex-start" }}
          />
          <Tab
            label="Create Position"
            value="create"
            href="/dapp/client/create"
            LinkComponent={Link}
            sx={{ alignItems: "flex-start" }}
          />
        </Tabs>
        <>{children}</>
      </Stack>
    </>
  );
}
