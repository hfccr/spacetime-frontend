"use client";
import Image from "next/image";
// import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import { motion } from "framer-motion";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <Box component="div" sx={{ textAlign: "center" }}>
        <motion.div whileHover={{ scale: 1.1 }}>
          <div className={styles.center}>
            <h1 className={styles.thirteen}>SPACETIME</h1>
          </div>
        </motion.div>
        <Typography variant="h6">FVM Based Storage Derivatives</Typography>
      </Box>

      <div className={styles.grid}>
        <Link href="/dapp/client/about" className={styles.card}>
          <h2 className={styles.menuItem}>
            Clients <span>&gt;</span>
          </h2>
          <p className={styles.menuItem}>
            Reserve storage prices for future use
          </p>
        </Link>

        <Link href="/dapp/provider" className={styles.card}>
          <h2 className={styles.menuItem}>
            Providers <span>&gt;</span>
          </h2>
          <p className={styles.menuItem}>Sell storage space in advance</p>
        </Link>

        <Link href="/dapp/trader" className={styles.card}>
          <h2 className={styles.menuItem}>
            Traders <span>&gt;</span>
          </h2>
          <p className={styles.menuItem}>Speculate on the price of storage</p>
        </Link>
      </div>
    </main>
  );
}
