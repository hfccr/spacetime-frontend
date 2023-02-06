"use client";
import { useDerivatives } from "@/hooks/useSpacetimeDAO";
import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import Derivative from "./Derivative";

export default function MarketTable({ view, address }) {
  const { isSuccess, isLoading, isError, error, derivatives } =
    useDerivatives();
  let derivativesUI = null;
  if (isSuccess) {
    derivativesUI = derivatives
      .filter((derivative) => {
        if (view === "provider") {
          return derivative.providerEthAddress === address;
        } else if (view === "client") {
          return derivative.clientEthAddress === address;
        } else {
          return true;
        }
      })
      .map((derivative, key) => (
        <Grid item key={key} xs={6}>
          <Derivative derivative={derivative} view={view} address={address} />
        </Grid>
      ));
  }
  return (
    <Container>
      <Grid container spacing={2}>
        {isSuccess && <>{derivativesUI}</>}
      </Grid>
    </Container>
  );
}
