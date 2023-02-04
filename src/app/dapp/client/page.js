"use client";
import React from "react";
import { Beryx } from "@zondax/beryx";

const jwt = process.env.NEXT_PUBLIC_ZONDAX_BERYX_TOKEY;
console.log(jwt);

const beryxClient = new Beryx.Filecoin({ jwt, network: "hyperspace" });

window.beryxClient = beryxClient;

export default function Client() {
  return <>Client</>;
}
