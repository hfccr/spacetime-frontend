"use client";
import Balance from "@/components/Balance";
import { Container, Typography } from "@mui/material";
import React from "react";

export default function About() {
  return (
    <Container>
      <Typography>
        Spacetime DAO controls the distribution of Space Tokens and Space
        Provider Tokens. Joining the DAO allows Providers to create positions
        and earn Space Provider Tokens which can be exchanged for FIL post the
        redemption of the contract.
      </Typography>
    </Container>
  );
}
