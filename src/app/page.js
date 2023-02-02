"use client";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import { motion } from "framer-motion";
import { Box, Typography } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

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
        <a
          href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Clients <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Reserve storage prices for future use
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Providers <span>-&gt;</span>
          </h2>
          <p className={inter.className}>Sell storage space in advance</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Traders <span>-&gt;</span>
          </h2>
          <p className={inter.className}>Speculate on the price of storage</p>
        </a>
      </div>
    </main>
  );
}
