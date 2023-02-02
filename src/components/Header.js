"use client";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Grid4x4Icon from "@mui/icons-material/Grid4x4";
import Connect from "./Connect";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: "transparent" }}>
        <Toolbar>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{
              flexGrow: 1,
              fontFamily: "Cube",
              cursor: "pointer",
              textShadow: "1px 1px 10px #fff, 1px 1px 10px #ccc",
            }}
          >
            ST
          </Typography>
          <div>
            <Connect />
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
