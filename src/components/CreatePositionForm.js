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
      type: 0,
      dealSize: 100000,
      term: 20000,
      price: 110000000,
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
  let sizeHelperText = "";
  if (errors.dealSize?.type === "required") {
    sizeHelperText = "Size is required";
  } else if (errors.dealSize?.type === "min") {
    sizeHelperText = "Size should be greater than 10000";
  } else if (errors.dealSize?.type === "max") {
    sizeHelperText = "Size should be lesser than 10000000";
  }
  let termHelperText = "";
  if (errors.term?.type === "required") {
    termHelperText = "Term is required";
  } else if (errors.term?.type === "min") {
    termHelperText = "Term should be greater than 10000";
  } else if (errors.term?.type === "max") {
    termHelperText = "Term should be lesser than 10000000";
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
                <MenuItem value={0}>Future</MenuItem>
                <MenuItem value={1}>Option</MenuItem>
                <MenuItem value={2}>Perpetual</MenuItem>
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
            rules={{
              required: true,
              min: 10000,
              max: 10000000,
            }}
            render={({ field }) => (
              <TextField
                {...field}
                type="number"
                error={errors.dealSize}
                helperText={sizeHelperText}
              />
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
            rules={{
              required: true,
              min: 10000,
              max: 10000000,
            }}
            render={({ field }) => (
              <TextField
                {...field}
                type="number"
                error={errors.term}
                helperText={termHelperText}
              />
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
              max: 11000000000,
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
