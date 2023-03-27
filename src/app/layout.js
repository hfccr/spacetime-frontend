"use client";
import { ThemeProvider } from "@mui/material/styles";
import Header from "./../components/Header";
import { brandingDarkTheme } from "./../util/theme";
import { WagmiConfig } from "wagmi";
import "@fontsource/michroma";
import "./globals.css";
import { client, fvmChain, connectors, chains } from "../util/chain";
import { Toaster } from "react-hot-toast";
import { RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";

const customRainbowKitProperties = {
  fonts: {
    body: '"Michroma"',
  },
};

const rainbowKitTheme = { ...darkTheme(), ...customRainbowKitProperties };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <WagmiConfig client={client}>
          <ThemeProvider theme={brandingDarkTheme}>
            <RainbowKitProvider chains={chains} theme={rainbowKitTheme}>
              <Header />
              <div>{children}</div>
              <Toaster
                toastOptions={{
                  className: "",
                  style: {
                    fontFamily: "Michroma",
                  },
                }}
              />
            </RainbowKitProvider>
          </ThemeProvider>
        </WagmiConfig>
      </body>
    </html>
  );
}
