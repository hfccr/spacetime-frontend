"use client";
import Balance from "@/components/Balance";
import { Container, Typography } from "@mui/material";
import React from "react";

export default function About() {
  return (
    <Container>
      <Typography>
        FIL is required for clients to purchase derivatives as fees and for
        margin. These tokens are transferred to the Storage Provider once the
        derivative is bought. During the active period, Providers receive
        Storage Provider Tokens which are 1:1 mapped to the fees of the margin
        and contract and can be used to fund their hardware setup and Filecoin
        collateral to fund the upcoming obligation.
      </Typography>
    </Container>
  );
}
