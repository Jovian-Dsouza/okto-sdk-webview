"use client"
import { useState } from "react";
import OktoWalletContainer from "./components/OktoWallet";

export default function Home() {
  const [show, setShow] = useState(true);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <OktoWalletContainer show={show} setShow={setShow}  />
    </main>
  );
}
