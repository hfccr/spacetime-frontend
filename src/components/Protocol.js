"use client";

import {
  Button,
  Box,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";

const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    // rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const FlowStep = ({ children }) => {
  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      sx={{
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        paddingTop: "20px",
        marginBottom: "-120px",
      }}
    >
      <motion.div className="card" variants={cardVariants}>
        <Box
          sx={{
            padding: 4,
            border: "1px solid white",
            borderRadius: 4,
            width: 380,
            minHeight: 400,
            margin: 10,
          }}
        >
          {children}
        </Box>
      </motion.div>
    </motion.div>
  );
};

const Flow = () => {
  return (
    <Box
      sx={{
        margin: "100px auto",
        paddingBottom: "100px",
      }}
    >
      <FlowStep>
        <Box>
          <Typography sx={{ fontFamily: "Cube", margin: 2 }}>1</Typography>
          <Typography variant="h6" sx={{ margin: 3 }}>
            SP Applies For Spacetime DAO Membership
          </Typography>
          <Button
            LinkComponent={Link}
            href="/dapp/dao/membership"
            sx={{ margin: 3 }}
          >
            Get DAO Membership
          </Button>
        </Box>
      </FlowStep>
      <FlowStep>
        <Box>
          <Typography sx={{ fontFamily: "Cube", margin: 2 }}>2</Typography>
          <Typography variant="h6" sx={{ margin: 2 }}>
            Spacetime DAO Members Accept Membership Post Evaluation
          </Typography>
        </Box>
      </FlowStep>
      <FlowStep>
        <Box>
          <Typography sx={{ fontFamily: "Cube", margin: 2 }}>3</Typography>
          <Typography variant="h6" sx={{ margin: 3 }}>
            SP Creates A Spacetime Derivatives Contract
          </Typography>
          <Button
            LinkComponent={Link}
            href="/dapp/provider/create"
            sx={{ margin: 3 }}
          >
            Create Contract
          </Button>
        </Box>
      </FlowStep>
      <FlowStep>
        <Box>
          <Typography sx={{ fontFamily: "Cube", margin: 2 }}>4</Typography>
          <Typography variant="h6" sx={{ margin: 3 }}>
            The Contract represents an obligation by the SP to create a Storage
            Deal on Filecoin in future for a data set specified by the buyer of
            the contract
          </Typography>
          <Button
            LinkComponent={Link}
            href="/dapp/provider/positions"
            sx={{ margin: 3 }}
          >
            View SP Positions
          </Button>
        </Box>
      </FlowStep>
      <FlowStep>
        <Box>
          <Typography sx={{ fontFamily: "Cube", margin: 2 }}>5</Typography>
          <Typography variant="h6" sx={{ margin: 3 }}>
            Clients interested in buying contracts can do so by using their SPT
            Token balance
          </Typography>
          <Button
            LinkComponent={Link}
            href="/dapp/client/market"
            sx={{ margin: 3 }}
          >
            View Client Market
          </Button>
        </Box>
      </FlowStep>
      <FlowStep>
        <Box>
          <Typography sx={{ fontFamily: "Cube", margin: 2 }}>6</Typography>
          <Typography variant="h6" sx={{ margin: 3 }}>
            The SPT tokens used by the client to purchase the position are
            transferred to the SP
          </Typography>
          <Button
            LinkComponent={Link}
            href="/dapp/provider/about"
            sx={{ margin: 3 }}
          >
            View Provider Balance
          </Button>
        </Box>
      </FlowStep>
      <FlowStep>
        <Box>
          <Typography sx={{ fontFamily: "Cube", margin: 2 }}>7</Typography>
          <Typography variant="h6" sx={{ margin: 3 }}>
            Clients can optionally put ther positions for sale
          </Typography>
          <Button
            LinkComponent={Link}
            href="/dapp/client/positions"
            sx={{ margin: 3 }}
          >
            View Client Positions
          </Button>
        </Box>
      </FlowStep>
      <FlowStep>
        <Box>
          <Typography sx={{ fontFamily: "Cube", margin: 2 }}>8</Typography>
          <Typography variant="h6" sx={{ margin: 3 }}>
            Client can indicate their desire to utilize the contract by logging
            a Filecoin Deal Proposal on the contract
          </Typography>
          <Button
            LinkComponent={Link}
            href="/dapp/client/positions"
            sx={{ margin: 3 }}
          >
            View Client Positions
          </Button>
        </Box>
      </FlowStep>
      <FlowStep>
        <Box>
          <Typography sx={{ fontFamily: "Cube", margin: 2 }}>9</Typography>
          <Typography variant="h6" sx={{ margin: 3 }}>
            Storage Providers can close the contract by supplying the contract
            with a Filecoin Network Deal ID that satisfies the parameters of the
            contract
          </Typography>
          <Button
            LinkComponent={Link}
            href="/dapp/provider/positions"
            sx={{ margin: 3 }}
          >
            View SP Positions
          </Button>
        </Box>
      </FlowStep>
      <FlowStep>
        <Box>
          <Typography sx={{ fontFamily: "Cube", margin: 2 }}>1o</Typography>
          <Typography variant="h6" sx={{ margin: 3 }}>
            Storage Providers can close the contract by supplying the contract
            with a Filecoin Network Deal ID that satisfies the parameters of the
            contract
          </Typography>
          <Button
            LinkComponent={Link}
            href="/dapp/provider/positions"
            sx={{ margin: 3 }}
          >
            View SP Positions
          </Button>
        </Box>
      </FlowStep>
    </Box>
  );
};

const WhatIf = () => {
  return (
    <>
      <Typography variant="h6" sx={{ fontWeight: "bold", margin: 6 }}>
        What If?
      </Typography>
      <Stack
        direction="row"
        spacing={3}
        justifyContent="space-between"
        alignItems="center"
      >
        <Box sx={{ padding: 0 }}>
          <Stack spacing={2}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Storage Provider Does Not Fulfil Obligation
            </Typography>
            <Typography variant="subtitle2" color="gray">
              Provider loses reputation
            </Typography>
            <Typography variant="subtitle2" color="gray">
              Provider loses DAO membership
            </Typography>
          </Stack>
        </Box>
        <Box sx={{ padding: 0 }}>
          <Stack spacing={2}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Client Chooses Not To Store Data For Futures Or Options
            </Typography>
            <Typography variant="subtitle2" color="gray">
              Provider maintains reputation
            </Typography>
            <Typography variant="subtitle2" color="gray">
              Provider can close contract
            </Typography>
          </Stack>
        </Box>
        <Box sx={{ padding: 0 }}>
          <Stack spacing={2}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Provider Drops Data After Making A Filecoin Deal
            </Typography>
            <Typography variant="subtitle2" color="gray">
              Provider is punished by Proof of Spacetime and Proof of
              Replication
            </Typography>
          </Stack>
        </Box>
      </Stack>
    </>
  );
};

const States = () => {
  return (
    <Stack
      direction="row"
      spacing={3}
      justifyContent="space-between"
      alignItems="flex-start"
    >
      <Box sx={{ padding: 0 }}>
        <Stack spacing={2}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Derivative Types
          </Typography>
          <Typography variant="subtitle2" color="gray">
            Futures
          </Typography>
          <Typography variant="subtitle2" color="gray">
            Options
          </Typography>
          <Typography variant="subtitle2" color="gray">
            Perpetuals
          </Typography>
        </Stack>
      </Box>
      <Box sx={{ padding: 0 }}>
        <Stack spacing={2}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            States
          </Typography>
          <Typography variant="subtitle2" color="gray">
            Open
          </Typography>
          <Typography variant="subtitle2" color="gray">
            Client Set
          </Typography>
          <Typography variant="subtitle2" color="gray">
            Deal Proposal Submitted
          </Typography>
          <Typography variant="subtitle2" color="gray">
            Deal Completed
          </Typography>
          <Typography variant="subtitle2" color="gray">
            Deal Failed By Provider
          </Typography>
          <Typography variant="subtitle2" color="gray">
            Deal Expired
          </Typography>
          <Typography variant="subtitle2" color="gray">
            Deal Withdrawn
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
};

const Contracts = () => {
  return (
    <Stack
      direction="row"
      spacing={3}
      justifyContent="space-between"
      alignItems="center"
    >
      <Box sx={{ padding: 0 }}>
        <Stack spacing={2}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            DAO
          </Typography>
          <Typography variant="subtitle2" color="gray">
            Grant Memberships To SPs
          </Typography>
          <Typography variant="subtitle2" color="gray">
            Manage SPT Tokens
          </Typography>
          <Typography variant="subtitle2" color="gray">
            Gatekeep Derivatives Minting
          </Typography>
        </Stack>
      </Box>
      <Box sx={{ padding: 0 }}>
        <Stack spacing={2}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Derivatives SBT Registry
          </Typography>
          <Typography variant="subtitle2" color="gray">
            Store Contract Parameters
          </Typography>
          <Typography variant="subtitle2" color="gray">
            Manage Contract State Transition
          </Typography>
          <Typography variant="subtitle2" color="gray">
            Interact With FVM Market API
          </Typography>
        </Stack>
      </Box>
      <Box sx={{ padding: 2 }}>
        <Stack spacing={2}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            SPT Token
          </Typography>
          <Typography variant="subtitle2" color="gray">
            Client Buy Contracts Using SPT
          </Typography>
          <Typography variant="subtitle2" color="gray">
            SPs Rewarded By SPT
          </Typography>
          <Typography variant="subtitle2" color="gray">
            Trade Using SPT
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
};

export default function Protocol() {
  return (
    <Container sx={{ marginTop: 10, marginBottom: 10 }}>
      <Stack direction="column" spacing={10}>
        <Stack justifyContent="center" alignItems="center" spacing={4}>
          <Typography variant="h6" sx={{ fontFamily: "Cube", marginBottom: 4 }}>
            Protocol
          </Typography>
          <Contracts />
          <Flow />
          <States />
          <WhatIf />
        </Stack>
      </Stack>
    </Container>
  );
}
