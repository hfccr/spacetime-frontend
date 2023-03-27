"use client";
import React from "react";
import {
  Tab,
  Box,
  Divider,
  Stack,
  Tabs,
  Typography,
  Button,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function ProviderLayout({ children }) {
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
        PUSH
      </Box>
      <Stack
        direction="column"
        sx={{ padding: 2, marginTop: 4 }}
        spacing={4}
        justifyContent="center"
        alignItems="center"
      >
        <Typography>
          Subscribe to Spacetime channel on PUSH to receive notifications about
          your positions
        </Typography>
        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image src="/push.png" alt="Push Channel" width={364} height={166} />
        </Box>
        <Button href="https://staging.push.org" target="_blank">
          Visit PUSH
        </Button>
      </Stack>
    </>
  );
}
