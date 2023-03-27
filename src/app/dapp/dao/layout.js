"use client";
import React from "react";
import { Tab, Box, Divider, Stack, Tabs, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ClientLayout({ children }) {
  const path = usePathname();
  let selected = "about";
  if (path.indexOf("membership") >= 0) {
    selected = "membership";
  }
  return (
    <>
      <Box
        component="span"
        sx={{
          marginBottom: 2,
          fontFamily: "Cube",
          fontSize: "x-large",
          cursor: "pointer",
        }}
      >
        Membership
      </Box>
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
            href="/dapp/dao/about"
            LinkComponent={Link}
            sx={{ alignItems: "flex-start", fontSize: "large" }}
          />
          <Tab
            label="Membership"
            value="membership"
            href="/dapp/dao/membership"
            LinkComponent={Link}
            sx={{ alignItems: "flex-start", fontSize: "large" }}
          />
        </Tabs>
        <>{children}</>
      </Stack>
    </>
  );
}
