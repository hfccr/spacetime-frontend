"use client";
import Balance from "@/components/Balance";
import { Container, Typography } from "@mui/material";
import React from "react";

export default function About() {
  return (
    <Container>
      <Typography>
        You are not a member of Spacetime DAO. Storage providers need to be a
        member of Spacetime DAO in order to create positions
      </Typography>
    </Container>
  );
}
