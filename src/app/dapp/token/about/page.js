"use client";
import Balance from "@/components/Balance";
import { Container, Typography } from "@mui/material";
import React from "react";

export default function About() {
  return (
    <Container>
      <Typography>
        SPT tokens are required for clients to purchase derivatives as fees and
        for margin. These tokens are transferred to the Storage Provider once
        the derivative is bought. The storage provider can use these tokens to
        fund their hardware setup and Filecoin collateral to fund the upcoming
        obligation.
      </Typography>
    </Container>
  );
}
