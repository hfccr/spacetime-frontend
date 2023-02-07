"use client";
import Image from "next/image";
// import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import { motion } from "framer-motion";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import Protocol from "@/components/Protocol";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Box component="div" sx={{ textAlign: "center" }}>
          <motion.div whileHover={{ scale: 1.1 }}>
            <div className={styles.center}>
              <h1 className={styles.thirteen}>SPACETIME</h1>
            </div>
          </motion.div>
          <Typography variant="h6" sx={{ marginBottom: 2 }}>
            FVM Based Storage Derivatives
          </Typography>
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

          <Link href="/dapp/provider/about" className={styles.card}>
            <h2 className={styles.menuItem}>
              Providers <span>&gt;</span>
            </h2>
            <p className={styles.menuItem}>Sell storage space in advance</p>
          </Link>

          <Link href="/dapp/trader" className={styles.card}>
            <h2 className={styles.menuItem}>
              Traders <span>&gt;</span>
            </h2>
            <p className={styles.menuItem}>Trade storage derivatives</p>
          </Link>

          <Link href="/dapp/token/about" className={styles.card}>
            <h2 className={styles.menuItem}>
              Token <span>&gt;</span>
            </h2>
            <p className={styles.menuItem}>View SPT metrics</p>
          </Link>

          <Link href="/dapp/dao/about" className={styles.card}>
            <h2 className={styles.menuItem}>
              DAO <span>&gt;</span>
            </h2>
            <p className={styles.menuItem}>View DAO</p>
          </Link>

          <Link href="/dapp/push" className={styles.card}>
            <h2 className={styles.menuItem}>
              PUSH <span>&gt;</span>
            </h2>
            <p className={styles.menuItem}>
              Get notified about interactions on your positions
            </p>
          </Link>
        </div>
      </main>
      <Protocol sx={{ marginTop: 4 }} />
    </>
  );
}
