"use client";

import {
  Box,
  Button,
  MenuItem,
  Select,
  Stack,
  Typography,
  TextField,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import Input from "@mui/material";

export default function CreatePositionForm({ actor, onSubmit }) {
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      type: "future",
      dealSize: "32g",
      term: "3m",
      price: 1100000000000,
    },
  });
  let priceHelperText = "";
  if (errors.price?.type === "required") {
    priceHelperText = "Price is required";
  } else if (errors.price?.type === "min") {
    priceHelperText = "Price should be greater than 0";
  } else if (errors.price?.type === "max") {
    priceHelperText = "Price should be lesser than 110000000000000";
  }
  return (
    <Box
      component="div"
      sx={{
        border: "1px solid gray",
        borderRadius: 4,
        padding: 3,
        width: "100%",
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ marginBottom: 2 }}
        >
          <Typography>Type</Typography>
          <Controller
            name="type"
            control={control}
            render={({ field }) => (
              <Select {...field}>
                <MenuItem value="future">Future</MenuItem>
                <MenuItem value="option">Option</MenuItem>
                <MenuItem value="perpetual">Perpetual</MenuItem>
              </Select>
            )}
          />
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ marginBottom: 2 }}
        >
          <Typography>Size</Typography>
          <Controller
            name="dealSize"
            control={control}
            render={({ field }) => (
              <Select {...field}>
                <MenuItem value="512m">512 MB</MenuItem>
                <MenuItem value="32g">32 GB</MenuItem>
              </Select>
            )}
          />
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ marginBottom: 2 }}
        >
          <Typography>Term</Typography>
          <Controller
            name="term"
            control={control}
            render={({ field }) => (
              <Select {...field}>
                <MenuItem value="3m">3 Months</MenuItem>
                <MenuItem value="6m">6 Months</MenuItem>
                <MenuItem value="1y">1 Year</MenuItem>
              </Select>
            )}
          />
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ marginBottom: 2, paddingBottom: 2 }}
        >
          <Typography>Price Per Epoch</Typography>
          <Controller
            name="price"
            control={control}
            rules={{
              required: true,
              min: 1,
              max: 110000000000000,
            }}
            render={({ field }) => (
              <TextField
                {...field}
                type="number"
                error={errors.price}
                helperText={priceHelperText}
              />
            )}
          />
        </Stack>
        <Stack justifyContent="center" alignItems="center">
          <Button size="large" type="submit">
            Create
          </Button>
        </Stack>
      </form>
    </Box>
  );
}
