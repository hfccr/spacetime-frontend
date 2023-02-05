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
  return (
    <>
      <Tooltip title="PUSH">
        <Box
          component="span"
          sx={{
            marginBottom: 2,
            fontFamily: "Cube",
            fontSize: "x-large",
            cursor: "pointer",
          }}
        >
          PUSH
        </Box>
      </Tooltip>
      <Stack direction="row" sx={{ padding: 2, marginTop: 4 }} spacing={4}>
        <Typography>
          Subscribe to Spacetime channel on PUSH to receive notifications about
          your positions
        </Typography>
      </Stack>
    </>
  );
}
