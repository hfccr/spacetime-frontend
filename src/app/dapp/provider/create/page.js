"use client";
import CreatePositionForm from "@/components/CreatePositionForm";
import { Box, Typography } from "@mui/material";
import React from "react";

export default function Create() {
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <CreatePositionForm actor="client" onSubmit={onSubmit} />
    </Box>
  );
}
