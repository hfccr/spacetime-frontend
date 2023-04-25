"use client";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Connect from "./Connect";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

export default function Header() {
  const pathname = usePathname();
  console.log(pathname);
  const isHome = pathname === "/" || pathname === undefined;
  return (
    <Box sx={{ flexGrow: 1, padding: 6 }}>
      <AppBar position="static" sx={{ background: "transparent" }}>
        <Toolbar>
          <Box component="div" sx={{ flexGrow: 0 }}>
            <Link href="/" sx={{}}>
              <Typography
                variant="subtitle1"
                component="div"
                sx={{
                  flexGrow: 1,
                  fontFamily: "Cube",
                  cursor: "pointer",
                  textShadow: "1px 1px 10px #fff, 1px 1px 10px #ccc",
                  marginRight: 2,
                }}
              >
                {isHome ? "SP" : "spacetime"}
              </Typography>
            </Link>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", marginLeft: 2 },
            }}
          >
            <a href="/#protocol-info">
              <Button
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  marginLeft: 2,
                  marginRight: 2,
                }}
              >
                PROTOCOL
              </Button>
            </a>
            <Button
              sx={{
                my: 2,
                color: "white",
                display: "block",
                marginLeft: 2,
                marginRight: 2,
              }}
            >
              USE CASES
            </Button>
            <Button
              sx={{
                my: 2,
                color: "white",
                display: "block",
                marginLeft: 2,
                marginRight: 2,
              }}
            >
              FAQ
            </Button>
          </Box>

          <div>
            <Connect />
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
